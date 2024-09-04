import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pessoa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public telefone: string

  @column.date()
  public dataNascimento: DateTime

  @column()
  public cpf: string
}
