//document.body.innerHTML = `<h1>hello world</h1>`;

const h1 = document.createElement("h1");

h1.innerText = "hello world";
h1.style.color = "red";
document.body.appendChild(h1);
//document.body.prepend(h1);
//class이름 추가
h1.classList.add("title");
// 클래스이름을 가져온다.
h1.className;

// 원하는 위치에 innertext 넣는법

//원하는 위치 앞에 넣을 태그 찾기
document.querySelector("h1");

//p 태그 생성
const p1 = document.createComment("p");

//node에서는 사용할 수 없다..
/*Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
at*/
//document.insertBefore(p1, h1);

document.querySelector("#app").innerHTML = `
  <button class="hello1">hello1</button>
  <button class="hello2">hello2</button>
  <button class="hello3">hello3</button>
  <div>
    <input type="text" class="name" placeholder="hi"/>
  </div>
  <div class="parent-of-button">
    <button type="button" class="helloworld-button">
      <span>Hello</span>
      <span>world</span>
    </button>
  </div>
`;

document.querySelector("button").addEventListener("click", function (e) {
  const input = document.querySelector(".name");
  console.log(input.value);
});

document.querySelector(".name").addEventListener("input", (e) => {
  console.log(e.target.value);
});

document.querySelector(".helloworld-button").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("event from button", e);
});

document.querySelector(".parent-of-button").addEventListener("click", (e) => {
  console.log("event from div", e);
});

//단축키 값은 기능을 지원해줄 수 있다.
document.querySelector(".name").addEventListener("keyup", (e) => {
  console.log(e.key);
});
