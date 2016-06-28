export const init = (id) => {
  const el = document.getElementById(id);
  if (el !== null) {
    el.textContent = 'Hello, world';
  }
  return el;
};
