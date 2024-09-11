import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'eventos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome').notNullable()
      table.string('local').notNullable()
      table.dateTime('dataInicio').notNullable()
      table.dateTime('dataFim').notNullable()

      //table.integer('organizacao_id').unsigned().references('id').inTable('organizacaos').onDelete('CASCADE') // Chave estrangeira

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}