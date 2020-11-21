import { HttpStatusCode } from '@resources/codes/http.statuscode'

class BaseException extends Error {

  public readonly status: string
  public readonly code: HttpStatusCode

  constructor (status: string, code: HttpStatusCode, message: string) {
    super(message)

    this.status = status
    this.code = code

    Error.captureStackTrace(this)
  }
}

export default BaseException
