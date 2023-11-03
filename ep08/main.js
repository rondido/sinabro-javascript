async function getTodo(id) {
  if (id === 2) {
    throw new Error(`error getting todo for ${id}`);
  }
  return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

function getTodo2(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

// 위에 둘다 값은 promise

const promise1 = getTodo(1);
const promise2 = getTodo(2);
const promise3 = getTodo(3);
//allSetteld 성공하든 실패하든 무조건 값을 반환하여 준다.
try {
  const responses = Promise.allSettled([promise1, promise2, promise3]);
  console.log(responses);
} catch (error) {
  console.log(error);
}

// const jsonPromise1 = await responses[0].json();
// const jsonPromise2 = await responses[1].json();
// const jsonPromise3 = await responses[2].json();
// const jsons = await Promise.all([jsonPromise1, jsonPromise2, jsonPromise3]);
// console.log(jsons);

// const responese1 = await getTodo(1);
// const json1 = await responese.json();
// console.log(json);

// const responese2 = await getTodo(2);
// const json2 = await responese.json();
// console.log(json);

// const responese3 = await getTodo(3);
// const json3 = await responese.json();
// console.log(json);

// function printDelayedMessage(message, timeout) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(message);
//       // resolve("success");
//       reject("error");
//     }, timeout);
//   });
// }
// console.log("before resolving pormise");
// const result = await printDelayedMessage("hi", 1000);

// console.log("after resolving pormise");
