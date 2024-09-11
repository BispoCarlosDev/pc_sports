import Organizacao from '#models/organizacao'
import Modalidade from '#models/modalidade'
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

  @column()
  declare modalidadeId: number
  
  @belongsTo(() => Modalidade, { foreignKey: 'modalidadeId' })
  declare modalidade: BelongsTo<typeof Modalidade>


}