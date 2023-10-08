import { setupProducts } from "./products";
import { setupCounter } from "./counter";
import { setupCart } from "./cart";

function findElement(startingElement, selector) {
  let currentElement = startingElement;
  while (true) {
    if (currentElement.matches(selector)) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }
  return null;
}

async function main() {
  const { updateCount: updateProdcutCount, getProductById } =
    await setupProducts({
      container: document.querySelector("#products"),
    });

  const {
    addProduct,
    removeProduct,
    updateCount: updateCartCount,
  } = setupCart({ container: document.querySelector(".cart_items") });
  const { increase, decrease, getTotalCount } = setupCounter();

  // const countMap = {};

  // const updateCart = () => {
  //   const productIds = Object.keys(countMap);
  //   document.querySelector(".cart_items").innerHTML = productIds
  //     .map((productId) => {
  //       const productIdCart = productMap[productId];
  //       if (countMap[productId] === 0) {
  //         return "";
  //       }
  //       return getProductHTML(productIdCart, countMap[productId]);
  //     })
  //     .join("");

  // };

  const updateTotalCount = (totalCount) => {
    document.querySelector(".total-count").innerHTML = `${totalCount}`;
  };

  const increaseCount = (productId) => {
    const count = increase({ productId });

    updateProdcutCount({ productId, count });
    if (count === 1) {
      addProduct({ product: getProductById({ productId }) });
    }
    updateCartCount({ productId, count });
    updateTotalCount(getTotalCount());
  };
  const decreaseCount = (productId) => {
    const count = decrease({ productId });

    updateProdcutCount({ productId, count });
    updateCartCount({ productId, count });
    if (count === 0) {
      removeProduct({ product: getProductById({ productId }) });
    }
    updateTotalCount(getTotalCount());
  };

  document.querySelector("#products").addEventListener("click", (e) => {
    const tagerElement = e.target;
    const productElement = findElement(tagerElement, ".product");
    const productId = productElement.getAttribute("data-product-id");
    if (
      tagerElement.matches(".btn-decrease") ||
      tagerElement.matches(".btn-increase")
    ) {
      if (tagerElement.matches(".btn-decrease")) {
        decreaseCount(productId);
      } else if (tagerElement.matches(".btn-increase")) {
        increaseCount(productId);
      }
    }
  });
  document.querySelector(".cart_items").addEventListener("click", (e) => {
    const tagerElement = e.target;
    const productElement = findElement(tagerElement, ".product");
    const productId = productElement.getAttribute("data-product-id");
    if (
      tagerElement.matches(".btn-decrease") ||
      tagerElement.matches(".btn-increase")
    ) {
      if (tagerElement.matches(".btn-decrease")) {
        decreaseCount(productId);
      } else if (tagerElement.matches(".btn-increase")) {
        increaseCount(productId);
      }
    }
  });
  document.querySelector(".btn-cart").addEventListener("click", () => {
    document.body.classList.add("displaying_cart");
  });

  document.querySelector(".btn-close-cart").addEventListener("click", () => {
    document.body.classList.remove("displaying_cart");
  });
  document.querySelector(".cart-bimmed-bg").addEventListener("click", () => {
    document.body.classList.remove("displaying_cart");
  });
}
main();
