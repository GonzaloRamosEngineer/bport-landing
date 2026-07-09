"use client";

import * as React from "react";

import { AdminDashboard } from "@/components/portal/admin-dashboard";
import { AdminLogin } from "@/components/portal/admin-login";

const SESSION_KEY = "bport-demo-admin";

/**
 * Gate de acceso FICTICIO (demo): cualquier credencial entra.
 * La fase real lo reemplaza por Supabase Auth.
 */
export function AdminView() {
  const [isLogged, setIsLogged] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    setIsLogged(window.sessionStorage.getItem(SESSION_KEY) === "1");
  }, []);

  const login = () => {
    window.sessionStorage.setItem(SESSION_KEY, "1");
    setIsLogged(true);
  };

  const logout = () => {
    window.sessionStorage.removeItem(SESSION_KEY);
    setIsLogged(false);
  };

  // Evita el flash del login mientras se hidrata.
  if (isLogged === null) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto h-72 max-w-md animate-pulse rounded-3xl bg-muted" />
      </div>
    );
  }

  return isLogged ? (
    <AdminDashboard onLogout={logout} />
  ) : (
    <AdminLogin onLogin={login} />
  );
}
