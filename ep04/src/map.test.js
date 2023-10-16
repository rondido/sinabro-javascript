import { describe, it, expect } from "vitest";

describe("map mothod", () => {
  it("squares the element", () => {
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map((number) => {
      return number * number;
    });
    expect(squares).toEqual([1, 4, 9, 16, 25]);
  });

  it("makes strings uppercase", () => {
    const words = ["hello", "world"];
    const uppercaseWords = words.map((word) => word.toUpperCase());
    expect(uppercaseWords).toEqual(["HELLO", "WORLD"]);
  });

  it("extracts user id", () => {
    const users = [
      {
        id: 1,
        name: "a",
      },
      {
        id: 2,
        name: "b",
      },
      {
        id: 3,
        name: "c",
      },
    ];
    const userIds = users.map((user) => user.id);
    expect(userIds).toEqual([1, 2, 3]);
  });
  it("extracts title and year", () => {
    const movies = [
      {
        title: "Rent",
        year: 2005,
        genres: ["Mysical", "Drama"],
      },
      {
        title: "Tick,Tick...Boom!",
        year: 2021,
        genres: ["Mysical", "Drama"],
      },
    ];
    const titlesAndYears = movies.map((movie) => {
      return {
        title: movie.title,
        year: movie.year,
      };
    });
    expect(titlesAndYears).toEqual([
      {
        title: "Rent",
        year: 2005,
      },
      {
        title: "Tick,Tick...Boom!",
        year: 2021,
      },
    ]);
  });
  it("adds genre property without mutating the source data", () => {
    const movies = [
      {
        title: "Rent",
        year: 2005,
        genres: ["Musical", "Drama"],
      },
      {
        title: "Tick,Tick...Boom!",
        year: 2021,
        genres: ["Drama", "Biography"],
      },
    ];
    const movies2 = movies.map((movie) => {
      return {
        title: movie.title,
        year: movie.year,
        genres: movie.genres,
        genre: movie.genres.join(" / "),
      };
    });
    expect(movies2).toEqual([
      {
        title: "Rent",
        year: 2005,
        genres: ["Musical", "Drama"],
        genre: "Musical / Drama",
      },
      {
        title: "Tick,Tick...Boom!",
        year: 2021,
        genres: ["Drama", "Biography"],
        genre: "Drama / Biography",
      },
    ]);
    expect(movies[0]).not.toHaveProperty("genre");
  });
});
