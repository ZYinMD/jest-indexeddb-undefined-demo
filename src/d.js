import { bar } from "./c";

export function notEvenCalled() {
  return sum(bar, 100);
}

export function sum(a, b) {
  return a + b;
}
