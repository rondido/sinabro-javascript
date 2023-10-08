import test from "./test.json?raw";

export function getProductElement(product, count = 0) {
  const element = document.createElement("div");
  element.classList.add("product");
  element.setAttribute("data-product-id", product.id);
  element.innerHTML = ` <img src="${product.images[0]}" alt="Image ${
    product.name
  }"/>
  <p>${product.name}</p>    
  <div class="flex itmes-center justify-between">
  <span>Price:${product.regularPrice}</span>
  <div>
    <button type="button" class="disabled disabled:opacity-50 disabled:cursor-not-allowed btn-decrease bg-green-200 py-1 px-3 rounded-full text-green-800 hover:bg-green-300">-</button>
    <span class="text-green-800 cart-count">${count === 0 ? "" : count}</span>
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

export async function setupProducts({ container }) {
  const products = await getProducts();
  const productMap = {};
  products.forEach((product) => {
    productMap[product.id] = product;
  });

  // document.querySelector("#products").innerHTML = products
  //   .map((product) => getProductHTML(product))
  //   .join("");

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
