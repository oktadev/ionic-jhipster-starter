const mock: any = (): any => {
  let storage: any = {};
  return {
    clear: (): any => storage = {},
    getItem: (key: any): any => key in storage ? storage[key] : null,
    removeItem: (key: any): boolean => delete storage[key],
    setItem: (key: any, value: any): string => storage[key] = value || ''
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', {
  value: (): string[] => ['-webkit-appearance']
});

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
});
