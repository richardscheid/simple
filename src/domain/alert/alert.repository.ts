import { IAlert } from '@domain/alert/interfaces/alert.interface'

export interface IAlertRepository {

  findAll (): Promise<IAlert[]>

  create (alert: IAlert): Promise<IAlert>
}
