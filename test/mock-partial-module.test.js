import { getGuitars } from "../src/database.js";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");
  return {
    ...originalModule,
    __esModule: true,
    getGuitars: jest.fn(),
  };
});
describe("Test Mock Partial Module: ", () => {
  it("Should Be Resovled For getGuitars", async () => {
    getGuitars.mockImplementation(async (connection) => {
      return new Promise((resolve, reject) => {
        if (!connection) {
          reject("Connection Failed!");
        } else {
          resolve([
            {
              id: 1,
              name: "Ancol",
            },
            {
              id: 2,
              name: "Dufan",
            },
          ]);
        }
      }); 
    });

    await expect(getGuitars(true)).resolves.toEqual([
      {
        id: 1,
        name: "Ancol",
      },
      {
        id: 2,
        name: "Dufan",
      },
    ]);
    await expect(getGuitars(false)).rejects.toBe("Connection Failed!");
  });
});