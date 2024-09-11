import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
//import { EnumDeclaration } from 'typescript'
//import { VineEnum } from '@vinejs/vine'

export default class Modalidade extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare genero: string

  @column()
  declare descricao: string


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
