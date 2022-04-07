export function handlerAddToBookmarks(id) {
  if (id) {
    let arrayIds = JSON.parse(localStorage.getItem("id"));
    let ids = new Set(arrayIds).add(id);
    localStorage.setItem("id", JSON.stringify([...ids]));
  }
}
export function getItemsFromLocalStorage(key) {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : null;
}
export function handlerClearLocalStorage(key) {
  localStorage.removeItem(key);
}
