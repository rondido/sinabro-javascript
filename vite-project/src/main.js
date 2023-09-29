import "./index.css";

import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>    
    <h1 class="text-3xl font-bold">Hello Vite!</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
 
  </div>
`;

setupCounter(document.querySelector("#counter"));
