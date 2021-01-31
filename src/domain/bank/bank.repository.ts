import { IBank } from '@domain/bank/interfaces/bank.interface'

export interface IBankRepository {

  create (bank: IBank): Promise<IBank>

  findAll (): Promise<IBank[]>

  findByCode (code: string)

  findById (_id: string)

}
