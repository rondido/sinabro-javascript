import { describe, it, expect } from "vitest";
import { shows } from "../src/data/shows";
describe("reduce method", () => {
  it("calculates the total of an array", () => {
    const numbers = [1, 2, 3, 4, 5];
    const callbackFn = (acc, item) => {
      acc += item;
      return acc;
    };
    const initalValue = 0;
    const sum = numbers.reduce(callbackFn, initalValue);
    expect(sum).toBe(15);
  });
  it("groups by genre", () => {
    const callbackFn = (result, show) => {
      if (!result[show.genre]) {
        result[show.genre] = [];
      }
      result[show.genre].push(show.title);
      return result;
    };
    const initalValue = {};
    const groupedShows = shows.reduce(callbackFn, initalValue);
    expect(groupedShows).toEqual({
      Comedy: ["Don't Look Up"],
      Drama: ["Stranger Things", "Our Blues", "Inventing Anna"],
      Mistery: ["Dirk Gently's Holistic Detective Agency"],
      Mystery: ["Little Women"],
    });
  });
  it("groups by key (2)", () => {
    const groupedShows = shows.reduce((result, show) => {
      const index = result.findIndex(
        (resultShow) => resultShow.genre === show.genre
      );
      if (index === -1) {
        result.push({
          genre: show.genre,
          titles: [show.title],
        });
      } else {
        result[index].titles.push(show.title);
      }
      return result;
    }, []);
    expect(groupedShows).toEqual([
      {
        genre: "Drama",
        titles: ["Stranger Things", "Our Blues", "Inventing Anna"],
      },
      {
        genre: "Mystery",
        titles: ["Little Women"],
      },
      {
        genre: "Comedy",
        titles: ["Don't Look Up"],
      },
      {
        genre: "Mistery",
        titles: ["Dirk Gently's Holistic Detective Agency"],
      },
    ]);
  });
  it("flattens array", () => {
    const nestedArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const flatArray = nestedArray.reduce((resultArray, arrayOfNumber) => {
      resultArray.push(...arrayOfNumber);
      return resultArray;
    }, []);
    expect(flatArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("extracts writer names", () => {
    const writerNames = shows.reduce((names, show) => {
      names.push(...show.writers);
      return names;
    }, []);
    expect(writerNames).toEqual([
      "Matt Duffer",
      "Ross Duffer",
      "Jessie Nickson-Lopez",
      "Kate Trefry",
      "Justin Doble",
      "Alison Tatlock",
      "Paul Dichter",
      "Jessica Mecklenburg",
      "Seo-Gyeong Jeong",
      "Hee-kyung Noh",
      "Shonda Rhimes",
      "Carolyn Ingber",
      "Jessica Pressler",
      "Nicholas Nardini",
      "Adam McKay",
      "Max Landis",
      "Douglas Adams",
    ]);
  });
});
