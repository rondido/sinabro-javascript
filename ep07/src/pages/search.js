export function getInitialHTML(initialData) {
  return `
    <h1>Search Results</h1>
    ${initialData.movies
      .map(
        (movie) =>
          `
          <div class="movie">
            <p>${movie.title}</p>
            <button type="button">click</button>
          </div>
          `
      )
      .join("")}`;
}

export async function renderSearch({ searchParams, initialData }) {
  if (!initialData) {
    document.querySelector("#app").innerHTML = `
    <h1>Search Resuts</h1>
    <p>searching for :${searchParams.query}...</p>
  `;

    const res = await fetch(
      import.meta.DEV
        ? "http://localhost:3000"
        : "" + `/api/search?query=${searchParams.query}`
    );

    const movies = await res.json();
    
    document.querySelector("#app").innerHTML = getInitialHTML({ movies });
  }

  Array.from(document.querySelectorAll(".movie button")).forEach((button) => {
    button.addEventListener("click", () => {
      console.log(123);
    });
  });
}
