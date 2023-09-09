const request = require("supertest");
const assert = require("assert");
const app = require("../app");

describe("Express Application Route Tests", () => {
  describe("GET /", () => {
    it('should render the index page with title "Express"', (done) => {
      request(app)
        .get("/")
        .expect("Content-Type", /html/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          assert(
            res.text.includes("Express"),
            'Title should include "Express"',
          );
          done();
        });
    });
  });

  describe("GET /users", () => {
    it('should return json with "My initials": "C. L"', (done) => {
      request(app).get("/users").expect("Content-Type", /json/).expect(
        200,
        {
          "My initials": "C. L",
        },
        done,
      );
    });
  });

  describe("GET /calc/add", () => {
    it("should perform addition and return the result", (done) => {
      request(app)
        .get("/calc/add?val=5&val=3")
        .expect("Content-Type", /text/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          assert.strictEqual(res.text, "8");
          done();
        });
    });

    it("should return 400 for invalid input", (done) => {
      request(app).get("/calc/add?val=abc&val=def").expect(400, done);
    });
  });
});

describe("GET /calc/subtract", () => {
  it("should perform subtraction and return the result", (done) => {
    request(app)
      .get("/calc/subtract?val=5&val=3")
      .expect("Content-Type", /text/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.text, "2");
        done();
      });
  });

  it("should return 400 for invalid input", (done) => {
    request(app).get("/calc/subtract?val=abc&val=def").expect(400, done);
  });
});
