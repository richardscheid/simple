import BaseException from './exception.base'
import { HttpStatus } from '@resources/codes/http.statuscode'
import { HttpStatusCode } from '../codes/http.statuscode'

class Exception extends BaseException {
  constructor (statusCode: HttpStatusCode, message: string) {
    super(HttpStatus.error(statusCode), statusCode, message)
  }
}

export default Exception
