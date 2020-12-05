import { IAlert } from '@interfaces/alert/alert.interface'

export interface IAlertGateway {

  findAll (): Promise<IAlert[]>

  create (alert: IAlert): Promise<IAlert>
}
