export async function say(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name) return reject("Name is empty!");
      return resolve(`Hello ${name}`);
    }, 1000);
  });
}