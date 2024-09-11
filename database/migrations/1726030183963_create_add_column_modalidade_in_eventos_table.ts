import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'eventos'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('modalidade_id').unsigned().references('id').inTable('modalidades').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('modalidade_id')
    })
  }
}