import { get } from "../src/permission.js";

describe("Test Mock Matcher Functionality: ", () => {
  it("Should be running mock matcher", async () => {
    const cb = jest.fn();
    cb.mockResolvedValueOnce(true);
    await expect(get("Damenjo", cb)).resolves.toEqual({
      name: "Damenjo",
      isAuthorized: true
    });
    expect(cb).toHaveBeenCalled();
    expect(cb).toHaveBeenCalledTimes(1);
    expect(cb).toHaveBeenCalledWith("Damenjo");
  });
});