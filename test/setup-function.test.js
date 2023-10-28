import { say } from "../src/async.js";

beforeAll(async () => {
  console.log("One Time Setup Function Initialized Start!");
});

beforeEach(async () => {
  console.info("Setup Each Function Start!");
});

test("Setup Function", async () => {
  await expect(say("India")).resolves.toBe("Hello India");
});

test("Setup Function (2)", async () => {
  await expect(say("Lima")).resolves.not.toBe("Hello Limosin");
});

test("Setup Function (3)", async () => {
  await expect(say("")).rejects.toBe("Name is empty!");
});

afterEach(async () => {
  console.info("Setup Each Function Finish!");
});

afterAll(async () => {
  console.log("One Time Setup Function Initialized Finish!");
});