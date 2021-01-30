import AlertRepositoryDb from '@resources/alert/alert.repository.db'
import { IAlert } from 'domain/alert/interfaces/alert.interface'
import Container, { Service } from 'typedi'

@Service()
class AlertService {

  async findAll (): Promise<IAlert[]> {
    return await AlertRepositoryDb.findAll()
  }

  async create (alert: IAlert): Promise<IAlert> {
    return await AlertRepositoryDb.create(alert)
  }
}

export default Container.get(AlertService)
