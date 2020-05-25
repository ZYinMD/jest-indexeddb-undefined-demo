import { openDB } from "idb";
export const dbConnection = openDB("myDB", 1);
