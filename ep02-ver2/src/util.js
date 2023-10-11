export function findElement(startingElement, selector) {
  let currentElement = startingElement;
  while (true) {
    if (currentElement.matches(selector)) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }
  return null;
}
