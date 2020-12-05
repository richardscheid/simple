import AlertGateway from '@gateways/alert/alert.gateway'
import { IAlert } from '@interfaces/alert/alert.interface'
import Container, { Service } from 'typedi'

@Service()
class AlertService {

  async findAll (): Promise<IAlert[]> {
    return await AlertGateway.findAll()
  }

  async create (alert: IAlert): Promise<IAlert> {
    return await AlertGateway.create(alert)
  }
}

export default Container.get(AlertService)
