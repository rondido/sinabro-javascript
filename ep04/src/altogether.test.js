import { describe, it, expect } from "vitest";

describe("altogether", () => {
  it("extracts items", () => {
    const users = [
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
      {
        id: 3,
        username: "c",
      },
      {
        id: 4,
        username: "d",
      },
    ];
    const idsToExtract = [1, 2, 5];
    const idsToExtractSet = new Set(idsToExtract);
    // const extractdUsers = users.filter((user) => {
    //   //return idsToExtract.includes(user.id);
    //   return idsToExtractSet.has(user.id);
    // });
    //Boolean 위치에 있는걸 대체할 수 있다.
    // const exists = (user) => {
    //   return user !== undefined;
    // };
    const extractdUsers = idsToExtract
      .map((idToFind) => {
        return users.find((user) => user.id === idToFind);
      })
      .filter(Boolean);
    expect(extractdUsers).toEqual([
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
    ]);
  });

  it("filters out duplicates", () => {
    const users = [
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
      {
        id: 3,
        username: "c",
      },
      {
        id: 1,
        username: "a",
      },
      {
        id: 3,
        username: "c",
      },
    ];

    // TODO: do something here
    // const foundUserIds = [];
    // const uniqueUsers = users.filter((user) => {
    //   if (foundUserIds.includes(user.id)) {
    //     return false;
    //   } else {
    //     foundUserIds.push(user.id);
    //     return true;
    //   }
    // });
    // const uniqueUsers = users.reduce((result, user) => {
    //   if (result.find((_user) => _user.id === user.id)) {
    //     return result;
    //   } else {
    //     result.push(user);
    //     return result;
    //   }
    // }, []);
    const uniqueUsers = users.filter((user, index) => {
      const firstMatchingIndex = users.findIndex(
        (_user) => _user.id === user.id
      );
      if (index !== firstMatchingIndex) {
        return false;
      } else {
        return true;
      }
    });
    expect(uniqueUsers).toEqual([
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
      {
        id: 3,
        username: "c",
      },
    ]);
  });

  it.only('gets movie titles before 2020 that starts with "A"', () => {
    const movies = [
      {
        title: "Frozen",
        actors: ["Kristen Bell", "Idina Menzel", "Josh Gad"],
        year: 2013,
      },
      {
        title: "A Quiet Place",
        actors: [
          "Emily Blunt",
          "John Krasinski",
          "Millicent Simmonds",
          "Noah Jupe",
        ],
        year: 2018,
      },
      {
        title: "Enola Holmes",
        actors: ["Millie Bobby Brown", "Henry Cavill"],
        year: 2020,
      },
    ];
    // TODO: do something here
    // const movieTitles = movies
    //   .filter((movie) => {
    //     return movie.year < 2020 && movie.title.startsWith("A");
    //   })
    //   .map((movie) => movie.title);
    const movieTitles = movies.reduce((titles, movie) => {
      if (movie.year < 2020 && movie.title.startsWith("A")) {
        titles.push(movie.title);
      }
      return titles;
    }, []);
    expect(movieTitles).toEqual(["A Quiet Place"]);
  });
});
