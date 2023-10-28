import { countEachCharacter } from "../src/count.js";

test("Array Matcher Simple", () => {
  expect(countEachCharacter("", true)).toBeNull();
  expect(countEachCharacter("Hai", true)).toEqual([1, 1, 1]);
  expect(countEachCharacter("HaiH", true)).toEqual([2, 1, 1]);
  expect(countEachCharacter("HaiHiii", true)).toContain(4);
  expect(countEachCharacter("HhhhhhaiHiii", true)).toContain(5);
}); 

test("Array Matcher Object", () => {
  expect(countEachCharacter("satu kata", false)).toEqual({
    s: 1,
    a: 3,
    t: 2,
    u: 1,
    k: 1,
  });

  const products = [
    { 
      name: "Darwin",
    },
    {
      name: "Windows",
    },
  ]
  expect(products).toContainEqual({
    name: "Windows",
  });
});