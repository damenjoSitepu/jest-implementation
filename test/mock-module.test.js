import { getGuitarById, getGuitars } from "../src/database.js";

jest.mock("../src/database.js");
describe("Test Mock Module: ", () => {
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

  it("Should Be Resolved For getGuitarById: ", async () => {
    getGuitarById.mockImplementation(async (connection, guitarId) => {
      return new Promise((resolve, reject) => {
        if (!connection || !guitarId) {
          reject("Connection Failed!");
        } else {
          resolve({
            id: guitarId,
            name: "My Best Guitar!"
          });
        }
      });
    });
    await expect(getGuitarById(true, 1)).resolves.toEqual({
      id: 1,
      name: "My Best Guitar!"
    });
    await expect(getGuitarById(false, 1)).rejects.toBe("Connection Failed!");
    await expect(getGuitarById(true, null)).rejects.toBe("Connection Failed!");
  }); 
});