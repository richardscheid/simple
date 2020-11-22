import { HttpStatusCode } from '@resources/codes/http.statuscode'

class BaseException extends Error {

  public readonly error: string
  public readonly statusCode: HttpStatusCode

  constructor (error: string, statusCode: HttpStatusCode, message: string) {
    super(message)

    this.error = error
    this.statusCode = statusCode

    Error.captureStackTrace(this)
  }
}

export default BaseException
