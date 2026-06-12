// Captures the last unhandled server-side error so server.ts can
// recover it after h3 swallows it into a generic 500 JSON response.

let lastCapturedError: Error | null = null;

if (typeof globalThis !== "undefined") {
  // Node.js / server environment
  if (typeof process !== "undefined" && process.on) {
    process.on("uncaughtException", (error: Error) => {
      lastCapturedError = error;
    });
  }
}

export function captureError(error: Error): void {
  lastCapturedError = error;
}

export function consumeLastCapturedError(): Error | null {
  const error = lastCapturedError;
  lastCapturedError = null;
  return error;
}
