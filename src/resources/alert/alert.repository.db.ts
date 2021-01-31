import { IAlert } from '@domain/alert/interfaces/alert.interface'
import { IAlertRepository } from '@domain/alert/alert.repository'
import Alert from '@domain/alert/entities/alert'
import Container, { Service } from 'typedi'

@Service()
class AlertRepositoryDb implements IAlertRepository {

  async findAll (): Promise<IAlert[]> {
    return await Alert.find()
  }

  async create (alert: IAlert): Promise<IAlert> {
    return await Alert.create(alert)
  }

}

export default Container.get(AlertRepositoryDb)
