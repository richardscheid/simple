import Exception from '@resources/exceptions/exception'
import BankService from '@services/bank/bank.service'
import i18next from 'i18next'

import { HttpStatusCode } from '@resources/codes/http.statuscode'
import { Request, Response } from 'express'

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
    const { code } = req.body

    const exists = await BankService.findByCode(code)

    if (exists) throw new Exception(HttpStatusCode.ALREADY_EXISTS, i18next.t('error.bank.alreadyexists'))

    const bank = await BankService.create(req.body)

    return res.json(bank)
  }
}

export default new BankController()
