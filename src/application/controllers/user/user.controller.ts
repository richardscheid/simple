import Exception from '@config/exceptions/exception'
import BankService from 'domain/bank/bank.service'
import i18next from 'i18next'

import { HttpStatusCode } from '@config/codes/http.statuscode'
import { UserBuilder } from 'domain/user/builders/user.builder'
import UserService from '@domain/user/user.service'
import Container, { Service } from 'typedi'
import { Request, Response } from 'express'

@Service()
class UserController {

  async findAll (req: Request, res: Response): Promise<Response> {
    const users = await UserService.findAll()

    return res.json(users)
  }

  async find (req: Request, res: Response): Promise<Response> {
    const users = await UserService.findAll()

    return res.json(users)
  }

  async findById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const users = await UserService.findById(id)

    if (!users) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.user.notfound'))

    return res.json(users)
  }

  async findTransactionByUserId (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const transactions = await UserService.findTransactionByUserId(id)

    if (!transactions) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.transaction.notfound'))

    return res.json(transactions)
  }

  async findNotificationByUserId (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const notifications = await UserService.findNotificationByUserId(id)

    return res.json(notifications)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const { email, name, password, document, identifier, agency } = req.body
    const { bank_id } = req.headers

    const exists = await UserService.findOne(email)

    if (exists) throw new Exception(HttpStatusCode.ALREADY_EXISTS, i18next.t('error.user.alreadyexists'))

    const bank = await BankService.findById(bank_id as string)

    if (!bank) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.bank.notfound'))

    const user = await UserService.create(
      new UserBuilder()
        .email(email)
        .name(name)
        .password(password)
        .document(document)
        .identifier(identifier)
        .agency(agency)
        .bank(bank)
        .build()
    )

    return res.json(user)
  }
}

export default Container.get(UserController)
