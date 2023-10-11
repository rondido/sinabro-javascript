import { getProductElement } from "./products";
import { findElement } from "./util";

export function setupCart({ container, onDecreaseClick, onIncreaseClick }) {
  container.addEventListener("click", (e) => {
    const tagerElement = e.target;
    const productElement = findElement(tagerElement, ".product");
    const productId = productElement.getAttribute("data-product-id");
    if (
      tagerElement.matches(".btn-decrease") ||
      tagerElement.matches(".btn-increase")
    ) {
      if (tagerElement.matches(".btn-decrease")) {
        onDecreaseClick({ productId });
      } else if (tagerElement.matches(".btn-increase")) {
        onIncreaseClick({ productId });
      }
    }
  });

  const addProduct = ({ product }) => {
    const productElement = getProductElement(product);
    container.appendChild(productElement);
  };

  const removeProduct = ({ product }) => {
    const productElement = container.querySelector(
      `.product[data-product-id='${product.id}']`
    );

    productElement.remove();
  };
  const updateCount = ({ productId, count }) => {
    const productElement = container.querySelector(
      `.product[data-product-id='${productId}']`
    );
    const cartCountElement = productElement.querySelector(".cart-count");

    cartCountElement.innerHTML = count;
    if (count === 0) {
      cartCountElement.innerHTML = "";
    }
  };

  return {
    //addproduct
    //removeproduct
    addProduct,
    removeProduct,
    updateCount,
  };
}
