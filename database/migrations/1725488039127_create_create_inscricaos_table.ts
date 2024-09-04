import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'inscricao'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.double('valor').notNullable()
      table.timestamp('data_inscricao').notNullable()
      table.enum('status', ['ativa', 'inativa'])
      .defaultTo('ativa').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}