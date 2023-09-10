This project is an Express.js application set up to demonstrate an ALM (Application Lifecycle Management) pipeline. It uses various technologies like linting, unit testing, integration testing, and a CI/CD pipeline using GitHub Actions.

## Tech

- **Node.js:** Runtime environment
- **Express.js:** Web application framework
- **EJS:** Template engine
- **Mocha:** Testing framework
- **ESLint:** Code linting
- **Husky:** Git hooks
- **NYC:** Code coverage
- **Prettier:** Code formatting
- **Supertest:** HTTP assertions
- **GitHub Actions:** CI/CD

## Setting Up the Development Environment

1.  **Clone the repository:**

    `git clone https://github.com/claudeloba/webb22_alm_slutuppgift.git`

2.  **Navigate to the project folder:**

    `cd webb22-alm-slutuppgift`

3.  **Install dependencies:**

    `npm install`

4.  **Run the application:**

    `DEBUG=webb22-alm-slutuppgift:* npm start`

    Visit `http://localhost:5050` to access the application.

## `npm` Scripts

- `npm run format`: Format code using Prettier
- `npm run lint`: Lint codebase using ESLint
- `npm run lint-fix`: Auto-fix linting issues
- `npm run test:unit`: Run unit tests
- `npm run test:integration`: Run integration tests
- `npm run test`: Run all tests
- `npm run coverage`: Run test coverage

## Husky Installation

Husky is pre-configured and should install automatically during `npm install`. If it doesn't, you can manually trigger Husky installation using:

`npm run prepare`

## Testing Strategy

Unit tests are located in the `/test` directory. To execute them, run:

`npm run test:unit`

Integration tests are also in the `/test` directory. To execute them, run:

`npm run test:integration`

## Linting and Formatting

ESLint is used for linting with Prettier for formatting. ESLint is configured to work seamlessly with the Prettier configuration, thereby avoiding conflicts between the two.

To lint the code, execute:

`npm run lint`

To fix auto-fixable lint issues, execute:

`npm run lint-fix`

## CI/CD Pipeline

The project utilizes GitHub Actions for the CI/CD pipeline. Upon each push or pull request, the pipeline runs unit tests, linting, and integration tests. It also includes job steps for fake deployment to test and production environments.

## VG Requirements

This project meets the VG requirements, optimizing for both the inner and outer loops.

1.  We use a small image in our build: alpine.
2.  We use the eslint-config-prettier.
3.  We configure test reports using Xunit Reporter
4.  We utilize nyc coverage
5.  We fail the pipeline if coverage does not reach at least 80% for each category
6.  We run tests against a running container
7.  We make sure NODE_ENV='production' is set when fake deploying to production.
8.  We make sure NODE_ENV='development' is set when fake deploying to test
9.  We validate commit messages with commitlint
