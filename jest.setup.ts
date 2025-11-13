import '@testing-library/jest-dom/extend-expect';

if (typeof (global as any).MutationObserver === 'undefined') {
  (global as any).MutationObserver = class {
    constructor(cb: any) {}
    disconnect(): void {}
    observe(): void {}
    takeRecords(): any[] { return []; }
  };
}
