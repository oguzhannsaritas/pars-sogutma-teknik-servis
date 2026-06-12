// Lovable error reporting utility.
// In local dev this is a no-op; in production (Lovable sandbox) it would
// send errors to Lovable's error tracking service.

export function reportLovableError(
  error: Error,
  context?: Record<string, unknown>,
): void {
  console.error("[Error]", error.message, context ?? "");
}
