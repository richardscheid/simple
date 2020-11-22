import CategoryService from '@services/category/category.service'
import { HttpStatusCode } from '@resources/codes/http.statuscode'
import Exception from '@resources/exceptions/exception'
import { Request, Response } from 'express'
import i18next from 'i18next'

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
    const category = await CategoryService.create(req.body)

    return res.json(category)
  }
}

export default new CategoryController()
