import { createContext, useContext } from "react";

export const LenisContext = createContext(null);

// Returns a ref whose .current is the live Lenis instance (or null if
// disabled/not-yet-ready) — read it imperatively inside event handlers,
// not during render.
export function useLenis() {
  return useContext(LenisContext);
}
