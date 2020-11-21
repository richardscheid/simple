import BaseException from './exception.base'
import { HttpStatus } from '@resources/codes/http.statuscode'
import { HttpStatusCode } from '../codes/http.statuscode'

class Exception extends BaseException {
  constructor (httpCode: HttpStatusCode, message: string) {
    super(HttpStatus.type(httpCode), httpCode, message)
  }
}

export default Exception
