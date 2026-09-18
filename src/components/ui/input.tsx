import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-sm border border-border bg-bg px-3 text-sm text-fg placeholder:text-subtle outline-none focus:border-signal",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle outline-none focus:border-signal",
        className,
      )}
      {...props}
    />
  );
}
