import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'inscricaos'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('evento_id').unsigned().references('id').inTable('eventos').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}