import { sum } from "./d";

// fail!! indexeddb is not defined.
// This demo is in node, but in real life I encountered this issue in a create-react-app project.
// this issue can be fixed by further decouple the code into more files. However, in my case, functions written in the same file are logically coupled.
test("why", () => {
  expect(sum(1, 1)).toBe(2);
});
