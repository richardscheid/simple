
export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  ALREADY_EXISTS = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500
}

export namespace HttpStatus {
  export function error (code: HttpStatusCode): string {
    return HttpStatusCode[code]
  }
}
