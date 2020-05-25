import { dbConnection } from "./a";

export const foo = 1;

export function doSomethingWithDB() {
  dbConnection.then((db) => {
    //...
  });
}
