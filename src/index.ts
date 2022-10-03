export default class ErrorFactory {
  static create(name: string) {
    const c = class extends Error {
      constructor(message: string, cause?: string) {
        super(message);
        cause && (this.cause = cause);
        this.name = name;
      }
    };
    Object.defineProperty(c, "name", { value: name });
    return c;
  }
}
