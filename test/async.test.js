import { say } from "../src/async.js";

test("Async Matcher", async () => {
  const test = await say("Jojo");
  expect(test).toBe(`Hello Jojo`);
});

test("Async Matcher (2)", async () => {
  await expect(say("Tari")).resolves.toBe("Hello Tari");
  await expect(say("")).rejects.toBe("Name is empty!");
});