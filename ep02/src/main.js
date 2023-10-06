import test from "./test.json?raw";

function getProductHTML(product, count = 0) {
  return `
  <div class="product" data-product-id="${product.id}" >
    <img src="${product.images[0]}" alt="Image ${product.name}"/>
    <p>${product.name}</p>    
    <div class="flex itmes-center justify-between">
    <span>Price:${product.regularPrice}</span>
    <div>
      <button type="button" class="disabled disabled:opacity-50 disabled:cursor-not-allowed btn-decrease bg-green-200 py-1 px-3 rounded-full text-green-800 hover:bg-green-300">-</button>
      <span class="text-green-800 cart-count">${count === 0 ? "" : count}</span>
      <button type="button" class="btn-increase bg-green-200 py-1 px-3 rounded-full text-green-800 hover:bg-green-300">+</button>
    </div>
  </div>
</div>
`;
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

function sumAllcounts(count) {
  let sum = 0;
  Object.values(count).forEach((number) => {
    sum += number;
  });
  return sum;
}
async function main() {
  const products = await getProducts();
  const productMap = {};
  products.forEach((product) => {
    productMap[product.id] = product;
  });

  const countMap = {};

  const updateProductCount = (productId) => {
    const productElement = document.querySelector(
      `.product[data-product-id='${productId}']`
    );
    const cartCountElement = productElement.querySelector(".cart-count");
    cartCountElement.innerHTML = countMap[productId];
    if (countMap[productId] === 0) {
      cartCountElement.innerHTML = "";
    }
  };

  const updateCart = () => {
    const productIds = Object.keys(countMap);
    document.querySelector(".cart_items").innerHTML = productIds
      .map((productId) => {
        const productIdCart = productMap[productId];
        if (countMap[productId] === 0) {
          return "";
        }
        return getProductHTML(productIdCart, countMap[productId]);
      })
      .join("");

    document.querySelector(".total-count").innerHTML = `${sumAllcounts(
      countMap
    )}`;
  };

  const increaseCount = (productId) => {
    if (countMap[productId] === undefined) {
      countMap[productId] = 0;
    }
    countMap[productId] += 1;
    updateProductCount(productId);
    updateCart();
  };
  const decreaseCount = (productId) => {
    if (countMap[productId] === undefined) {
      countMap[productId] = 0;
    }
    countMap[productId] -= 1;
    updateProductCount(productId);
    updateCart();
  };
  document.querySelector("#products").innerHTML = products
    .map((product) => getProductHTML(product))
    .join("");

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
