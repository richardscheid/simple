import Exception from '@resources/exceptions/exception'
import UserService from '@services/user/user.service'
import BankService from '@services/bank/bank.service'
import i18next from 'i18next'

import { HttpStatusCode } from '@resources/codes/http.statuscode'
import { Request, Response } from 'express'
import { IBank } from '../../interfaces/bank/bank.interface'
import { UserBuilder } from '../../builders/user/user.builder'

class UserController {

  async findAll (req: Request, res: Response): Promise<Response> {
    const users = await UserService.findAll()

    return res.json(users)
  }

  async findById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const users = await UserService.findById(id)

    if (!users) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.user.notfound'))

    return res.json(users)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const { email } = req.body

    const exists = await UserService.findOne(email)

    if (exists) throw new Exception(HttpStatusCode.ALREADY_EXISTS, i18next.t('error.user.alreadyexists'))

    const { bank_id } = req.headers

    const bank = await BankService.findById(bank_id as string)

    if (!bank) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.bank.notfound'))

    const { username, password, document, account } = req.body

    const user = await UserService.create(
      new UserBuilder()
        .email(email)
        .username(username)
        .password(password)
        .document(document)
        .account(account, bank)
        .build()
    )

    return res.json(user)
  }
}

export default new UserController()
