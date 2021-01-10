export default (num) => {
  return new Promise((resolve) => setTimeout(() => resolve(), num));
};
