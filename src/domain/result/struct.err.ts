export class DefaultError {
  constructor(public msg: string) {}
  static new(msg: string) {
    return new DefaultError(msg);
  }
}
