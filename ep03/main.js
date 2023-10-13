document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hi</h1>
    <h1>Hello!</h1>
    <p id="result"></p>
  </div>
`;

async function fetchDataAndDisplay() {
  const response = await fetch(`/api/test`);
  const json = await response.json();
  document.querySelector("#result").innerHTML = JSON.stringify(json, null);
}

//CORS
//Page가 떠있는 주소는 localhost:5173 api는 3000 port 다른 origin으로 데이터를 요청
//브라우저단에서는 조금 더 스트릭트한 룰을 가지고 있다.
//CORS는 브라우저의 룰이다.
