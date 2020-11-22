import { HttpStatusCode } from '@resources/codes/http.statuscode'
import CategoryService from '@services/category/category.service'
import { AlertBuilder } from '@builders/alert/alert.builder'
import Exception from '@resources/exceptions/exception'
import { Request, Response } from 'express'
import Alert from '@models/alert/alert'
import i18next from 'i18next'

class AlertController {

  public async findAll (req: Request, res: Response): Promise<Response> {
    const alerts = await Alert.find()

    return res.json(alerts)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const { name, target, condition } = req.body
    const { category_id } = req.headers

    const category = await CategoryService.findById(String(category_id))

    if (!category) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.category.notfound'))

    const alert = await Alert.create(
      new AlertBuilder()
        .name(name)
        .target(target)
        .condition(condition)
        .cagetory(category)
        .build())

    return res.json(alert)
  }
}

export default new AlertController()
