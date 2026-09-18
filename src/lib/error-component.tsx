import { Link, type ErrorComponentProps } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg">
      <p className="text-[11px] uppercase tracking-[0.18em] text-danger">Error</p>
      <h1 className="font-display text-2xl tracking-tight">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-muted">{errorMessage(error)}</p>
      <Link to="/" className="mt-2 text-sm text-signal hover:underline">
        Dashboard
      </Link>
    </main>
  );
}

export function AppNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg">
      <p className="text-[11px] uppercase tracking-[0.18em] text-signal">404</p>
      <h1 className="font-display text-2xl tracking-tight">Page not found</h1>
      <p className="max-w-md text-sm text-muted">This path is not part of the academy.</p>
      <Link to="/" className="mt-2 text-sm text-signal hover:underline">
        Dashboard
      </Link>
    </main>
  );
}
