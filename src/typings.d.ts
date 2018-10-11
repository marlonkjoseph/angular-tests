/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// To get the TypeScript to compile my custom ambient type
// type I declare them in the typings.d.ts file.
declare namespace jasmine {
  interface Matchers<T> {
    toBeDisplayed(expectationFailOutput?: any): boolean;
    notToBeDisplayed(expectationFailOutput?: any): boolean;
  }
}