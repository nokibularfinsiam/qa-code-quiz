# QA Testing Quiz

### Scenario
The frontend team has developed a prototype login portal for an up and coming platform.
However, they have not implemented any testing yet and it is up to you to do so.

As the QA developer, what is tested and how it is tested is up to you.
Management simply asks that these tests provide as much evidence as possible of the platform's reliability.

### Notes

# QA Code Quiz

This project is a prototype login portal. This README focuses on how to run the app and the test-suite added for QA verification.

Overview
 - Dev server: webpack-dev-server
 - Unit tests: Jest (ts-jest)
 - Component tests: React Testing Library
 - End-to-end tests: Cypress

Important: Node version and OpenSSL
 - If you run this project with Node 17+ you may encounter the OpenSSL/Webpack error:
	 "error:0308010C:digital envelope routines::unsupported"
 - Workarounds:
	 - Use Node 16 (recommended for this repo)
	 - Or start the dev server with the legacy provider (Windows PowerShell example):
		 ```powershell
		 $env:NODE_OPTIONS='--openssl-legacy-provider'
		 npm run start
		 ```

Test credentials (for local/dev testing)
 - `SomeUser_name` / `TopSecret1234!` (name shown: SomeName)
 - `dummytree` / `test1`
 These are stored in `storage/account.json` and are for demo/testing only.

How to run
 1) Install dependencies
 ```powershell
 Set-Location -LiteralPath 'D:\Siam\Code Ch\qa-code-quiz'
 npm install
 ```

 2) Start the dev server (opens a browser by default)
 ```powershell
 $env:NODE_OPTIONS='--openssl-legacy-provider'
 npm run start
 ```

Running tests
 - Unit tests (Jest):
 ```powershell
 npx jest --runInBand --verbose
 ```

 - Component integration tests use React Testing Library and are included with Jest.

 - Cypress E2E tests (ensure dev server is running):
 ```powershell
 # interactive
 npx cypress open

 # headless
 npx cypress run --spec cypress/integration/login.spec.js
 ```

CI
 - A GitHub Actions workflow has been added in `.github/workflows/ci.yml`.
 - It runs unit tests under Node 16 and attempts the E2E run with Cypress.

Notes and recommendations
 - Move test accounts to fixtures if you prefer isolating test data from the application runtime.
 - Consider pinning Node to 16 in CI and local dev for reproducible builds.

What I changed
- Added automated tests: Jest unit tests for `AuthContext`, React Testing Library integration test for Login + Header, and a Cypress E2E spec for the happy path.
- Added `jest.setup.ts` (jest-dom + MutationObserver polyfill).
- Added CI workflow in `.github/workflows/ci.yml`.
- Added `SUBMISSION.md` containing summary and coverage information.
