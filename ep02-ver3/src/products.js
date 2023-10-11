import { findElement } from "./util";
import test from "./test.json?raw";

export function getProductElement(product) {
  const element = document.createElement("div");
  element.classList.add("product");
  element.setAttribute("data-product-id", product.id);
  element.innerHTML = ` <img src="${product.images[0]}" alt="Image ${product.name}"/>
  <p>${product.name}</p>    
  <div class="flex itmes-center justify-between">
  <span>Price:${product.regularPrice}</span>
  <div>
    <button type="button" class="disabled disabled:opacity-50 disabled:cursor-not-allowed btn-decrease bg-green-200 py-1 px-3 rounded-full text-green-800 hover:bg-green-300">-</button>    
    <span class="text-green-800 cart-count" 
    data-subscribe-to="countMap" 
    data-subscription-path="${product.id}">
    </span>
    <button type="button" class="btn-increase bg-green-200 py-1 px-3 rounded-full text-green-800 hover:bg-green-300">+</button>
  </div>
</div>`;
  return element;
}

async function getProducts() {
  if (process.env.NODE_ENV === "development") {
    return JSON.parse(test);
  } else {
    const response = await fetch(
      "https://learnwitheunjae.dev/api/sinabro-js/ecommerce"
    );
    return await response.json();
  }
}

export async function setupProducts({
  container,
  onDecreaseClick,
  onIncreaseClick,
}) {
  const products = await getProducts();
  const productMap = {};
  products.forEach((product) => {
    productMap[product.id] = product;
  });

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

  products.forEach((product) => {
    const productElement = getProductElement(product);
    container.appendChild(productElement);
  });

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
  const getProductById = ({ productId }) => {
    return productMap[productId];
  };
  return { updateCount, getProductById };
}
