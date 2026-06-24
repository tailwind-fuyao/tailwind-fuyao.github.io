import type { ReactNode, AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "glass" | "glass-dark";
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95";

  const variants = {
    primary:
      "bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40",
    glass: "glass glass-shine text-text hover:text-primary",
    "glass-dark": "glass-dark text-white",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
