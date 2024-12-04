export interface HttpResponse<T> {
  statusCode: Number;
  body: T | string;
}
