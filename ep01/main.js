// //document.body.innerHTML = `<h1>hello world</h1>`;

// const h1 = document.createElement("h1");

// h1.innerText = "hello world";
// h1.style.color = "red";
// document.body.appendChild(h1);
// //document.body.prepend(h1);
// //class이름 추가
// h1.classList.add("title");
// // 클래스이름을 가져온다.
// h1.className;

// // 원하는 위치에 innertext 넣는법

// //원하는 위치 앞에 넣을 태그 찾기
// document.querySelector("h1");

// //p 태그 생성
// const p1 = document.createComment("p");

// //node에서는 사용할 수 없다..
// /*Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
// at*/
// //document.insertBefore(p1, h1);

// document.querySelector("#app").innerHTML = `
//   <button class="hello1">hello1</button>
//   <button class="hello2">hello2</button>
//   <button class="hello3">hello3</button>
//   <div>
//     <input type="text" class="name" placeholder="hi"/>
//   </div>
//   <div class="parent-of-button">
//     <button type="button" class="helloworld-button">
//       <span>Hello</span>
//       <span>world</span>
//     </button>
//   </div>
// `;

// document.querySelector("button").addEventListener("click", function (e) {
//   const input = document.querySelector(".name");
//   console.log(input.value);
// });

// document.querySelector(".name").addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// document.querySelector(".helloworld-button").addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("event from button", e);
// });

// document.querySelector(".parent-of-button").addEventListener("click", (e) => {
//   console.log("event from div", e);
// });

// //단축키 값은 기능을 지원해줄 수 있다.
// document.querySelector(".name").addEventListener("keyup", (e) => {
//   console.log(e.key);
// });

// document.querySelector("#app").innerHTML = `
//     <input/>
//     <button>click</button>
// `;

// document.querySelector("button").addEventListener("click", (e) => {
//   const currentValue = document.querySelector("input").value;
//   document.querySelector("input").value = currentValue + "*";
// });

// let count = 0;
// setInterval(() => {
//   count += 1;
//   document.querySelector("#app").innerHTML = `
//     <input/>
//     <button>click</button>
//     <p>count :${count}</p>
//   `;
// }, 5000);

document.querySelector("#app").innerHTML = `
  <button type="button" class="btn-add-card">Add card</button>
  <div class="cards">
    
  </div>
`;
let cardCount = 0;

document.querySelector(".btn-add-card").addEventListener("click", () => {
  cardCount += 1;
  const card = document.createElement("div");
  card.className = "card";
  //card.setAttribute("data-number", cardCount);
  card.innerHTML = `
    <p>Card ${cardCount}</p>
    <button class="btn-hello" type="button" data-number="${cardCount}">hello</button>
    
  `;
  const myCardCount = cardCount;
  // card.querySelector(".btn-hello").addEventListener("click", () => {
  //   console.log(`hello,${myCardCount}`);
  // });
  document.querySelector(".cards").appendChild(card);
});

document.querySelector(".cards").addEventListener("click", (e) => {
  //console.log("click from .cards", e);
  const maybeButton = e.target;
  if (e.target.matches(".btn-hello")) {
    //const cardName = maybeButton.parentElement.children[0].innerText;
    //console.log("button is clicked", cardName);
    console.log("button is clicked", maybeButton.getAttribute("data-number"));
  } else {
    console.log("button is not");
  }
});
