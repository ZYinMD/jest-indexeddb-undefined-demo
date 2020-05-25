import { dbConnection } from "./a";
function notEvenCalled() {
  dbConnection.then((db) => {
    /* not doing anything */
  });
}
export const foo = 1;
