const multiply = require("./multiply");

describe("multiply", () => {
  it("mutiples 2 and 3", () => {
    expect(multiply(2, 3)).toBe(6);
  });
  it("multiples 0 and 5", () => {
    expect(multiply(0, 5)).toBe(0);
  });
});
