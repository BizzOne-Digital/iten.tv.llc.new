import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-orange text-bg hover:bg-orange-bright shadow-[0_0_0_rgba(242,107,29,0)] hover:shadow-[0_0_24px_rgba(242,107,29,0.45)]",
  outline:
    "border border-chrome-2/60 text-text hover:border-orange hover:text-orange-bright",
  ghost: "text-text-muted hover:text-orange-bright",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  icon,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 font-display uppercase tracking-widest text-sm transition-all duration-300 rounded-sm";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
