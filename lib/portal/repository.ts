import { seedOperations } from "@/lib/portal/demo-data";
import {
  applyStatusUpdate,
  createOperation,
  normalizeCode,
} from "@/lib/portal/status";
import type {
  NewOperationInput,
  Operation,
  OperationUpdate,
} from "@/lib/portal/types";

/**
 * Capa de acceso a datos del portal. La demo persiste en localStorage;
 * la fase real reemplaza esta implementación por una basada en Supabase
 * (misma interfaz, la UI no cambia).
 */
export interface PortalRepository {
  list(): Operation[];
  findByCode(code: string): Operation | undefined;
  update(code: string, patch: OperationUpdate): Operation | undefined;
  create(input: NewOperationInput): Operation;
  reset(): Operation[];
}

const STORAGE_KEY = "bport-portal-demo:v1";
const STORAGE_VERSION = 1;

type StoredState = {
  version: number;
  operations: Operation[];
};

export class LocalStoragePortalRepository implements PortalRepository {
  private read(): Operation[] {
    if (typeof window === "undefined") return seedOperations();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return this.reset();
      const parsed = JSON.parse(raw) as StoredState;
      if (parsed.version !== STORAGE_VERSION || !Array.isArray(parsed.operations)) {
        return this.reset();
      }
      return parsed.operations;
    } catch {
      return this.reset();
    }
  }

  private write(operations: Operation[]): void {
    if (typeof window === "undefined") return;
    try {
      const state: StoredState = { version: STORAGE_VERSION, operations };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Sin storage disponible (modo incógnito estricto): la demo sigue en memoria.
    }
  }

  list(): Operation[] {
    return this.read();
  }

  findByCode(code: string): Operation | undefined {
    const normalized = normalizeCode(code);
    return this.read().find((op) => op.code.toUpperCase() === normalized);
  }

  update(code: string, patch: OperationUpdate): Operation | undefined {
    const operations = this.read();
    const index = operations.findIndex((op) => op.code === code);
    if (index === -1) return undefined;
    const updated = applyStatusUpdate(operations[index], patch, new Date().toISOString());
    const next = [...operations];
    next[index] = updated;
    this.write(next);
    return updated;
  }

  create(input: NewOperationInput): Operation {
    const operations = this.read();
    const operation = createOperation(input, new Date().toISOString());
    this.write([operation, ...operations]);
    return operation;
  }

  reset(): Operation[] {
    const operations = seedOperations();
    this.write(operations);
    return operations;
  }
}

export const portalRepository: PortalRepository = new LocalStoragePortalRepository();
