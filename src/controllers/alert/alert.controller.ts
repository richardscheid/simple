import { HttpStatusCode } from '@resources/codes/http.statuscode'
import CategoryService from '@services/category/category.service'
import { AlertBuilder } from '@builders/alert/alert.builder'
import AlertService from '@services/alert/alert.service'
import Exception from '@resources/exceptions/exception'
import { Request, Response } from 'express'
import Container, { Service } from 'typedi'
import i18next from 'i18next'

@Service()
class AlertController {

  async findAll (req: Request, res: Response): Promise<Response> {
    const alerts = await AlertService.findAll()

    return res.json(alerts)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const { name, target, condition } = req.body
    const { category_id } = req.headers

    const category = await CategoryService.findById(String(category_id))

    if (!category) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.category.notfound'))

    const alert = await AlertService.create(
      new AlertBuilder()
        .name(name)
        .target(target)
        .condition(condition)
        .cagetory(category)
        .build())

    return res.json(alert)
  }
}

export default Container.get(AlertController)
