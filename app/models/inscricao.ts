import Evento from '#models/evento'
import Competidor from '#models/competidor'
import Modalidade from '#models/modalidade'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Inscricao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare valor: number

  @column()
  declare status: string

  //@hasMany(() => Evento)
  //declare eventos: HasMany<typeof Evento>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  @column()
  declare competidorId: number

  @belongsTo(() => Competidor, { foreignKey: 'competidorId' })
  declare competidor: BelongsTo<typeof Competidor>

  @column()
  declare eventoId: number

  @belongsTo(() => Evento, { foreignKey: 'eventoId' })
  declare evento: BelongsTo<typeof Evento>

  @column()
  declare modalidadeId: number
  
  @belongsTo(() => Modalidade, { foreignKey: 'modalidadeId' })
  declare modalidade: BelongsTo<typeof Modalidade>


}