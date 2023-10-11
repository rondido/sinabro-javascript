import { setupProducts } from "./products";
import { setupCounter } from "./counter";
import { setupCart } from "./cart";

async function main() {
  const { updateCount: updateProdcutCount, getProductById } =
    await setupProducts({
      container: document.querySelector("#products"),
      onDecreaseClick,
      onIncreaseClick,
    });

  const {
    addProduct: addProdcutToCart,
    removeProduct: removeProductfromCart,
    updateCount: updateCartCount,
  } = setupCart({
    container: document.querySelector(".cart_items"),
    onDecreaseClick,
    onIncreaseClick,
  });
  const { increase, decrease, getTotalCount } = setupCounter();

  const updateTotalCount = (totalCount) => {
    document.querySelector(".total-count").innerHTML = `${totalCount}`;
  };

  function onIncreaseClick({ productId }) {
    const count = increase({ productId });

    updateProdcutCount({ productId, count });
    if (count === 1) {
      addProdcutToCart({ product: getProductById({ productId }) });
    }
    updateCartCount({ productId, count });
    updateTotalCount(getTotalCount());
  }
  function onDecreaseClick({ productId }) {
    const count = decrease({ productId });

    updateProdcutCount({ productId, count });
    updateCartCount({ productId, count });
    if (count === 0) {
      removeProductfromCart({ product: getProductById({ productId }) });
    }
    updateTotalCount(getTotalCount());
  }

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
