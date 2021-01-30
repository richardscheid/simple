import { TransactionBuilder } from '@builders/transaction/transaction.builder'
import { Status } from '@interfaces/transaction/transaction.interface'
import { HttpStatusCode } from '@resources/codes/http.statuscode'
import { Request, Response } from 'express'
import i18next from 'i18next'

import TransactionService from '@services/transaction/transaction.service'
import CategoryService from '@services/category/category.service'
import Exception from '@resources/exceptions/exception'
import UserService from '@services/user/user.service'
import Container, { Service } from 'typedi'

@Service()
class TransactionController {

  async findAll (req: Request, res: Response): Promise<Response> {
    const transactions = await TransactionService.findAll()

    return res.json(transactions)
  }

  async findById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const transaction = await TransactionService.findById(id)

    if (!transaction) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.transaction.notfound'))

    return res.json(transaction)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const { total, identifier, coo, texts, items, date } = req.body
    const { user_id, category_name } = req.headers

    const user = await UserService.findById(user_id as string)
    if (!user) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.user.notfound'))

    const category = await CategoryService.findOne(category_name as string)
    if (!category) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.category.notfound'))

    const transaction = await TransactionService.create(
      new TransactionBuilder()
        .status(Status.Unverified)
        .identifier(identifier)
        .total(total)
        .coo(coo)
        .date(date)
        .texts(texts)
        .items(items)
        .category(category)
        .user(user)
        .build()
    )

    return res.json(transaction)
  }

  async upload (req: Request, res: Response): Promise<Response> {
    const { transaction_id } = req.body
    const file = req?.file

    if (!file) throw new Exception(HttpStatusCode.BAD_REQUEST, i18next.t('error.image.required'))

    const transaction = await TransactionService.findById(transaction_id)

    if (!transaction) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.transaction.notfound'))

    const { filename } = file

    await TransactionService.upload(filename, transaction)

    return res.json(transaction)
  }
}

export default Container.get(TransactionController)
