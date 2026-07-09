import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        navy: "border-[rgba(22,50,79,0.22)] bg-[rgba(22,50,79,0.08)] text-primary",
        teal: "border-[rgba(47,143,131,0.28)] bg-[rgba(47,143,131,0.1)] text-[#1d6a61]",
        amber: "border-[rgba(180,110,30,0.28)] bg-[rgba(212,150,60,0.12)] text-[#8a5a14]",
        red: "border-[rgba(185,28,28,0.24)] bg-[rgba(185,28,28,0.08)] text-[#a02222]",
        outline: "border-border bg-transparent text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
