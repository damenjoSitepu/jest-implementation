export function countCharLength(word) {
  try {
    if (typeof word !== "string" || !word) return 0;
    return word.length;
  } catch (e) {
    return 0;
  }
}