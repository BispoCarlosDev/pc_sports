import Organizacao from '#models/organizacao'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Evento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare local: string

  //@hasMany(() => Evento)
  //declare eventos: HasMany<typeof Evento>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  @column()
  declare organizacaoId: number

  @belongsTo(() => Organizacao, { foreignKey: 'organizacaoId' })
  declare organizacao: BelongsTo<typeof Organizacao>


}