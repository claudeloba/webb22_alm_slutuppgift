const assert = require("assert");
const { Calculator } = require("../Calculator");

describe("Calculator", () => {
  describe("#add", () => {
    it("should add two positive numbers correctly", () => {
      const calculator = new Calculator();
      calculator.add(1);
      calculator.add(2);
      assert.strictEqual(calculator.getResult(), 3);
    });

    it("should handle negative numbers correctly", () => {
      const calculator = new Calculator();
      calculator.add(-3);
      calculator.add(5);
      assert.strictEqual(calculator.getResult(), 2);
    });

    it("should handle zero correctly", () => {
      const calculator = new Calculator();
      calculator.add(0);
      calculator.add(0);
      assert.strictEqual(calculator.getResult(), 0);
    });
  });
  describe("#subtract", () => {
    it("should subtract two positive numbers correctly", () => {
      const calculator = new Calculator();
      calculator.add(5);
      calculator.subtract(2);
      assert.strictEqual(calculator.getResult(), 3);
    });

    it("should handle negative numbers correctly", () => {
      const calculator = new Calculator();
      calculator.add(5);
      calculator.subtract(-3);
      assert.strictEqual(calculator.getResult(), 8);
    });

    it("should handle zero correctly", () => {
      const calculator = new Calculator();
      calculator.add(0);
      calculator.subtract(0);
      assert.strictEqual(calculator.getResult(), 0);
    });
  });
});
