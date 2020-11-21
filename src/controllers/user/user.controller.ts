import Exception from '@resources/exceptions/exception'
import UserService from '@services/user/user.service'
import i18next from 'i18next'

import { HttpStatusCode } from '@resources/codes/http.statuscode'
import { Request, Response, NextFunction } from 'express'

class UserController {

  async all (req: Request, res: Response): Promise<Response> {
    const users = await UserService.findAll()

    return res.json(users)
  }

  async findById (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      const users = await UserService.findById(id)

      if (!users) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.notfound.user'))

      return res.json(users)
    } catch (err) {
      next(err)
    }
  }

  async create (req: Request, res: Response): Promise<Response> {
    const user = await UserService.create(req.body)

    return res.json(user)
  }
}

export default new UserController()
