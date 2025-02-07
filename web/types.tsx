// e.g. e/abcdefghij.jpg
export type SavedImage = string;

export type Loader<T> =
  // loading submitted, awaiting response
  | { code: 'loading' }
  // loading finished, data is available
  | ({ code: 'ready' } & T)
  // error happened
  | { code: 'error'; message: string };

export class AppError extends Error {
  readonly body: unknown;

  constructor(msg: string, body?: unknown) {
    super(msg);
    this.body = body;
  }
}
