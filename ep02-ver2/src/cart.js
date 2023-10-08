import { getProductElement } from "./products";
export function setupCart({ container }) {
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
