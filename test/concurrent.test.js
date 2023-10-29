import { say } from "../src/async.js";

const sayTable = [
  {
    name: "Damenjo",
    result: "Hello Damenjo",
  },
  {
    name: "Tari",
    result: "Hello Tari",
  },
  {
    name: "Sari",
    result: "Hello Sari",
  },
];

describe("To test say hello within name parameter", () => {
  it.concurrent.each(sayTable)("Base on name: $name within result: 'Hello $result'", async ({ name, result }) => {
    await expect(say(name)).resolves.toBe(`Hello ${name}`);
  }); 
});