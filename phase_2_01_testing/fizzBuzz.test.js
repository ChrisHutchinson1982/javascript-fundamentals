const fizzBuzz = require("./fizzBuzz");

describe("fizzBuzz", () => {
  it("returns Fizz when 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("returns Fizz when 18", () => {
    expect(fizzBuzz(18)).toBe("Fizz");
  });
  it("returns Buzz when 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("returns Buzz when 20", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });
  it("returns FizzBuzz when 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("returns 8 when 8", () => {
    expect(fizzBuzz(8)).toBe(8);
  });
});
