import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Modalidade extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare sexo: string

  @column()
  declare descricao: string

}
