import { bar } from "./c";
export function innocentFunction() {
  return "I am innocent";
}
function notEvenCalled() {
  console.log(innocentFunction(), bar);
}
