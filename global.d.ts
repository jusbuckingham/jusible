// global.d.ts or jusible.ts
export {};

declare global {
  interface Window {
    JusibleWidget: any;
    ReactDOM: any;
  }
}
