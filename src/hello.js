import { CustomException } from "./utils/exceptions/custom-exception.js";

export function sayHi(name = "Damenjo") {
  if (name === "Damenjo")
    throw new CustomException("Custom error occured!");
  else
    return name;
}