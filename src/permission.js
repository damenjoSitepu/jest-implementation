export const get = async (name, cb) => {
  return {
    name,
    isAuthorized: await cb(name)
  };
};