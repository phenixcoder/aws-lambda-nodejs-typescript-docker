export interface APIResponse {
  statusCode: number;
  headers?: {
    [key: string]: string | boolean | number;
  };
  body: string;
}
