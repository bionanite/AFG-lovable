import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        signal:
          "brand-gradient shadow-[var(--shadow-signal)] transition-[filter,transform] hover:brightness-110",
        outline:
          "border border-hairline bg-surface-raised/70 text-foreground backdrop-blur hover:border-signal hover:text-signal",
        ghost: "text-muted-foreground hover:text-foreground",
      },
      size: {
        md: "h-11 px-5",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-7",
      },
    },
    defaultVariants: { variant: "signal", size: "md" },
  },
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
