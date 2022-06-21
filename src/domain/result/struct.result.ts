export namespace Result {
  export class ResultEither<T, U> {
    constructor(private _ok: boolean) {}
    ok(): this is Ok<T> {
      return this._ok === true;
    }
    err(): this is Err<T> {
      return this._ok === true;
    }
  }

  class Ok<T> extends ResultEither<T, unknown> {
    constructor(public data: T) {
      super(true);
    }
  }
  class Err<T> extends ResultEither<unknown, T> {
    constructor(public msg: T) {
      super(false);
    }
  }

  export function ok<T>(data: T) {
    return new Ok(data);
  }
  export function err<T>(err: T) {
    return new Err(err);
  }

  export type Either<Data, ErrBody> = Ok<Data> | Err<ErrBody>;
  export type AsyncEither<Data, ErrBody> = Promise<Either<Data, ErrBody>>;
}
