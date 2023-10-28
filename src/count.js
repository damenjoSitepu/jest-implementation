export function countCharLength(word) {
  try {
    if (typeof word !== "string" || !word) return 0;
    return word.length;
  } catch (e) {
    return 0;
  }
}

export function countEachCharacter(word, isLiteMode = true) {
  if (!word) return null;

  const counter = {};
  for (let i = 0; i < word.length; i++) {
    try {
      if (word[i] === " ") continue;
      if (counter.hasOwnProperty(word[i])) 
        counter[word[i]] = ++counter[word[i]];
      else 
        Object.assign(counter, { [word[i]]: 1 });
    } catch (e) { continue; }
  }
  return isLiteMode ? Object.values(counter) : counter;
}