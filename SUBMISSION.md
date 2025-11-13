# Submission: QA Code Quiz

Repository (my fork): https://github.com/nokibularfinsiam/qa-code-quiz

Summary
- Implemented automated tests to provide evidence of reliability for the login portal.
- Added unit tests (Jest + ts-jest) for authentication logic.
- Added component integration tests (React Testing Library) for Login + Header.
- Added an E2E skeleton test (Cypress) for the login happy path.
- Added Jest setup (`jest.setup.ts`) to register jest-dom matchers and polyfill MutationObserver for jsdom.
- Added a GitHub Actions CI workflow (`.github/workflows/ci.yml`) that runs unit tests under Node 16 and attempts E2E runs with Cypress.

What I changed (files)
- `src/contexts/__tests__/auth.test.tsx` — unit tests for AuthContext (login success and failure).
- `src/components/__tests__/login.integration.test.tsx` — integration test verifying Login updates Header after login.
- `cypress/integration/login.spec.js` — Cypress E2E spec (login happy path).
- `jest.setup.ts` — registers `@testing-library/jest-dom` and polyfills `MutationObserver`.
- `jest.config.js` — configured `setupFilesAfterEnv` to use `jest.setup.ts` and uses `jsdom` env.
- `package.json` — added dev dependencies for testing (React Testing Library + helpers).
- `.github/workflows/ci.yml` — CI workflow to run tests.
- `README.md` — updated with run/test instructions and Node/OpenSSL workaround.

How to run the project and tests (PowerShell)
1) Install dependencies
```
Set-Location -LiteralPath 'D:\Siam\Code Ch\qa-code-quiz'
npm install
```

2) Start dev server (Node 17+ workaround)
```
$env:NODE_OPTIONS='--openssl-legacy-provider'
npm run start
```

3) Run unit & component tests with coverage
```
npx jest --coverage --runInBand --verbose
```

4) Run Cypress E2E (dev server must be running)
```
npx cypress open
# or headless
npx cypress run --spec cypress/integration/login.spec.js
```

Test data / credentials
- `SomeUser_name` / `TopSecret1234!` (UI shows: SomeName)
- `dummytree` / `test1`

Coverage summary (from local run)
- All files: 95.12% statements, 100% branches, 70% functions, 95% lines
- `contexts/auth.tsx`: 89.47% statements, 100% branches, 40% functions, 88.89% lines (uncovered lines: 18, 38)

Notes and next steps
- There are React testing warnings about state updates not wrapped in `act(...)`. Tests pass; I can refactor tests to wrap updates in `act()` to silence warnings.
- I added a small MutationObserver polyfill in `jest.setup.ts` to make async `waitFor` behave reliably in jsdom.
- I recommend moving test fixtures into `__fixtures__` for better isolation and adding coverage thresholds in CI.

If you want, I can also:
- Add screenshots or Cypress artifacts to the repository (or attach them separately).
- Harden CI to use `start-server-and-test` and fail the build on low coverage.

---
Submission prepared by: Arfin
