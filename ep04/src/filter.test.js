import { describe, it, expect } from "vitest";
import { posts } from "./data/posts";

describe("filter method - simple", () => {
  it("gets positive numbers", () => {
    const numbers = [1, -2, 3, -4, 5];
    //Todo: do something here
    const positiveNumbers = numbers.filter((number) => {
      return number > 0;
    });
    expect(positiveNumbers).toEqual([1, 3, 5]);
  });

  it("gets employees in Sales department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Sales" },
    ];
    const salesEmployees = employees.filter(
      (employ) => employ.department === "Sales"
    );
    expect(salesEmployees).toEqual([
      { name: "John", age: 30, department: "Sales" },
      { name: "Jim", age: 40, department: "Sales" },
    ]);
  });
  it("gets employees over 35 in Marketing department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Marketing" },
    ];
    const salesEmployeesOver35 = employees.filter((employee) => {
      if (employee.age > 35 && employee.department === "Marketing") {
        return true;
      } else {
        return false;
      }
    });
    expect(salesEmployeesOver35).toEqual([
      { name: "Jim", age: 40, department: "Marketing" },
    ]);
  });
  it("gets emplyees in Sales or Development", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Marketing" },
    ];
    //incudes
    const targetDepartments = ["Sales", "Development"];
    //경우에 따라 효과적인
    const targetDepartmentsSet = new Set(targetDepartments);
    const salesOrDevEmployees = employees.filter((employee) => {
      return targetDepartmentsSet.has(employee.department);
    });
    expect(salesOrDevEmployees).toEqual([
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
    ]);
  });

  it("gets emplyees in Sales or Development", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Marketing" },
    ];
    //incudes
    const targetDepartments = ["Sales", "Development"];
    //경우에 따라 효과적인
    const targetDepartmentsSet = new Set(targetDepartments);
    const salesOrDevEmployees = employees.filter((employee) => {
      return targetDepartmentsSet.has(employee.department);
    });
    expect(salesOrDevEmployees).toEqual([
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
    ]);
  });
});

describe("filter method - real world", () => {
  it("gets posts from this year", () => {
    const postsThisYear = posts.filter((post) => {
      // return post.meta.created_at.split("-")[0] === "2023";
      return new Date(post.meta.created_at).getFullYear() === 2023;
    });
    expect(postsThisYear.length).toBe(7);
  });
  it("gets posts with 'culture' tag", () => {
    const postsWithClutureTag = posts.filter((post) =>
      post.meta.tags.includes("culture")
    );
    expect(postsWithClutureTag.length).toBe(2);
  });
  it("gets tweets posted after 10pm", () => {
    const tweetsPostedAfter10pm = posts.filter((post) => {
      const freanchTimestamp = new Date(post.meta.created_at).getUTCHours();
      return freanchTimestamp >= 22;
    });
    expect(tweetsPostedAfter10pm.length).toBe(2);
  });
});
