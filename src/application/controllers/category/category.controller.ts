import CategoryService from '@domain/category/category.service'
import { HttpStatusCode } from '@config/codes/http.statuscode'
import Exception from '@config/exceptions/exception'
import { Request, Response } from 'express'
import Container, { Service } from 'typedi'
import i18next from 'i18next'

Service()
class CategoryController {

  async findAll (req: Request, res: Response): Promise<Response> {
    const categories = await CategoryService.findAll()

    return res.json(categories)
  }

  async findById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const category = await CategoryService.findById(id)

    if (!category) throw new Exception(HttpStatusCode.NOT_FOUND, i18next.t('error.category.notfound'))

    return res.json(category)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const { name } = req.body

    const exists = await CategoryService.findOne(name)

    if (exists) throw new Exception(HttpStatusCode.ALREADY_EXISTS, i18next.t('error.category.alreadyexists'))

    const category = await CategoryService.create(req.body)

    return res.json(category)
  }
}

export default Container.get(CategoryController)
