import '@testing-library/jest-dom';

// Node >= 25 ships a built-in Web Storage global that is `undefined` unless
// `--localstorage-file` is passed, and it shadows jsdom's implementation.
// Point the globals back at jsdom's working Storage objects.
const { jsdom } = globalThis as unknown as { jsdom?: { window: Window } };
if (jsdom) {
  for (const key of ['localStorage', 'sessionStorage'] as const) {
    if (!globalThis[key]) {
      Object.defineProperty(globalThis, key, {
        configurable: true,
        enumerable: true,
        value: jsdom.window[key],
      });
    }
  }
}
