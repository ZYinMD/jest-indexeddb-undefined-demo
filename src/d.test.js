import { innocentFunction } from "./d";
test("why", () => {
  expect(innocentFunction()).toBe("I am innocent"); // fail!! indexeddb is not defined. This demo is in node, but in real life I encountered this issue in a create-react-app project.
});
