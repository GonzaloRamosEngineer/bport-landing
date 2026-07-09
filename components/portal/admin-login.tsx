"use client";

import * as React from "react";
import { LogIn, ShieldCheck } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { portalCopy } from "@/lib/portal/copy";

const copy = portalCopy.admin;

export function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="card-elevated w-full max-w-md p-6 sm:p-8">
        <span className="icon-box mb-5">
          <ShieldCheck className="h-5 w-5" aria-hidden />
        </span>
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1 className="font-display mt-2 text-2xl text-foreground">
          {copy.loginTitle}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {copy.loginSubtitle}
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            onLogin();
          }}
        >
          <div className="space-y-1.5">
            <Label htmlFor="admin-email">{copy.emailLabel}</Label>
            <Input
              id="admin-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={copy.emailPlaceholder}
              autoComplete="off"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="admin-password">{copy.passwordLabel}</Label>
            <Input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn-primary w-full !py-2.5 text-sm">
            <LogIn className="h-4 w-4" aria-hidden />
            {copy.loginButton}
          </button>
        </form>

        <button
          type="button"
          onClick={onLogin}
          className="btn-ghost mt-3 w-full !py-2.5 text-sm"
        >
          {copy.loginAsDemo}
        </button>
      </div>
    </div>
  );
}
