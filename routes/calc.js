const express = require("express");
const { Calculator } = require("../Calculator");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Calculator API is running. Visit: /add?val=1&val=1 to calculate");
});

router.get("/add", (req, res) => {
  const values = req.query.val;

  if (!values || values.length < 2) {
    res.status(400).send("Invalid input");
    return;
  }

  const val1 = parseFloat(values[0]);
  const val2 = parseFloat(values[1]);

  if (isNaN(val1) || isNaN(val2)) {
    res.status(400).send("Invalid input");
    return;
  }

  const calculator = new Calculator();
  calculator.add(val1);
  calculator.add(val2);

  res.send(`${calculator.getResult()}`);
});

router.get("/subtract", (req, res) => {
  const values = req.query.val;

  if (!values || values.length < 2) {
    res.status(400).send("Invalid input");
    return;
  }

  const val1 = parseFloat(values[0]);
  const val2 = parseFloat(values[1]);

  if (isNaN(val1) || isNaN(val2)) {
    res.status(400).send("Invalid input");
    return;
  }

  const calculator = new Calculator();
  calculator.add(val1);
  calculator.subtract(val2);

  res.send(`${calculator.getResult()}`);
});

module.exports = router;
