import { IAlert } from '@interfaces/alert/alert.interface'
import Container, { Service } from 'typedi'
import { IAlertGateway } from './alert.gateway.interface'
import Alert from '@models/alert/alert'

@Service()
class AlertGateway implements IAlertGateway {

  async findAll (): Promise<IAlert[]> {
    return await Alert.find()
  }

  async create (alert: IAlert): Promise<IAlert> {
    return await Alert.create(alert)
  }

}

export default Container.get(AlertGateway)
