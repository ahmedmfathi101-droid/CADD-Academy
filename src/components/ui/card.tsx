import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-bg-elevated p-5 shadow-[0_1px_0_rgba(236,232,225,0.04)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3 className={cn("font-display text-lg tracking-tight text-fg", className)} {...props} />
  );
}

export function CardDesc({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("mt-1 text-sm leading-relaxed text-muted", className)} {...props} />;
}
