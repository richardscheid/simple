import UserService from '@services/user/user.service'
import { Request, Response } from 'express'
import i18next from 'i18next'

class UserController {
  public async all (req: Request, res: Response): Promise<Response> {
    const users = await UserService.findAll()

    return res.json(users)
  }

  public async findById (req: Request, res:Response): Promise<Response> {
    const { id } = req.params

    const users = await UserService.findById(id as string)

    if (!users) return res.status(400).send(i18next.t('error.notfound.user'))

    return res.json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await UserService.create(req.body)

    return res.json(user)
  }
}

export default new UserController()
