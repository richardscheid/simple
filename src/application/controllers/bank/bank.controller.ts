import Exception from '@config/exceptions/exception'
import BankService from 'domain/bank/bank.service'
import i18next from 'i18next'
import R from 'ramda'

import { HttpStatusCode } from '@config/codes/http.statuscode'
import { Request, Response } from 'express'
import { IBank } from 'domain/bank/interfaces/bank.interface'
import { BankBuilder } from 'domain/bank/builders/bank.builder'

class BankController {

  async findAll (req: Request, res: Response): Promise<Response> {
    const banks = await BankService.findAll()

    return res.json(banks)
  }

  async findByCode (req: Request, res: Response): Promise<Response> {
    const { code } = req.params

    const bank = await BankService.findByCode(code)

    if (!bank) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.bank.notfound'))

    return res.json(bank)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const { ...banks } = req.body

    R.forEachObjIndexed(bank => {
      const data : IBank = (new BankBuilder().code(bank.code).name(bank.name).document(bank.document).build())

      BankService.create(data)
    }, banks)

    return res.status(HttpStatusCode.OK).send()
  }
}

export default new BankController()
