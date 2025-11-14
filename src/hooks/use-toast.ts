// Minimal noop toast hooks to satisfy build
// Replace with your actual toast implementation if needed
export function useToast() {
  return {
    toast: (_opts?: any) => {},
  } as const;
}

export function toast(_opts?: any) {
  // no-op
}

