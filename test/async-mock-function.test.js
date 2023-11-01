import { get } from "../src/permission.js";

describe("Test Async Mock Function: ", () => {
  it("Should be Async With Resolved Value Once", async () => {
    const cb = jest.fn();
    cb.mockResolvedValueOnce("Anything");
    await expect(get("Damenjo",cb)).resolves.toEqual({
      name: "Damenjo",
      isAuthorized: "Anything"
    });
  });

  it("Should be Async With Rejected Value Once", async () => {
    const cb = jest.fn();
    cb.mockRejectedValueOnce("Nouggat");
    await expect(get("Tari", cb)).rejects.toBe("Nouggat");
  });

  it("Should Be Async With Resolved And Rejected Promise: ", async () => {
    const cb = jest.fn();
    cb.mockImplementation(async (name) => {
      return new Promise((resolve, reject) => {
        if (name === "Damenjo") {
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
    await expect(get("Damenjo", cb)).resolves.toEqual({
      name: "Damenjo",
      isAuthorized: true
    });

    await expect(get("Tari", cb)).rejects.toBe(false);
  });
});