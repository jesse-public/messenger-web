export class DispatchUninitializedError extends Error {
  constructor() {
    super();
    this.message = "Dispatch has not been initialized.";
  }
}
