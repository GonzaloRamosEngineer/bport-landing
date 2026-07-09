"use client";

import * as React from "react";

import { seedOperations } from "@/lib/portal/demo-data";
import { portalRepository } from "@/lib/portal/repository";
import { normalizeCode } from "@/lib/portal/status";
import type {
  NewOperationInput,
  Operation,
  OperationUpdate,
} from "@/lib/portal/types";

/**
 * Estado cliente de las operaciones de la demo.
 * El render inicial usa el seed (consistente con SSR) y se hidrata desde
 * localStorage post-mount (`isReady`). Escucha el evento `storage` para que
 * una edición en la pestaña del admin refresque la pestaña del cliente.
 */
export function usePortalOperations() {
  const [operations, setOperations] = React.useState<Operation[]>(() =>
    seedOperations(),
  );
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setOperations(portalRepository.list());
    setIsReady(true);

    const onStorage = (event: StorageEvent) => {
      if (event.key && !event.key.startsWith("bport-portal-demo")) return;
      setOperations(portalRepository.list());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const getByCode = React.useCallback(
    (code: string): Operation | undefined => {
      const normalized = normalizeCode(code);
      return operations.find((op) => op.code.toUpperCase() === normalized);
    },
    [operations],
  );

  const updateOperation = React.useCallback(
    (code: string, patch: OperationUpdate): Operation | undefined => {
      const updated = portalRepository.update(code, patch);
      if (updated) setOperations(portalRepository.list());
      return updated;
    },
    [],
  );

  const createOperation = React.useCallback(
    (input: NewOperationInput): Operation => {
      const created = portalRepository.create(input);
      setOperations(portalRepository.list());
      return created;
    },
    [],
  );

  const resetDemo = React.useCallback(() => {
    setOperations(portalRepository.reset());
  }, []);

  return {
    operations,
    isReady,
    getByCode,
    updateOperation,
    createOperation,
    resetDemo,
  };
}
