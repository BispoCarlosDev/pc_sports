import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'eventos'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('organizacao_id').unsigned().references('id').inTable('organizacaos').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('organizacao_id')
    })
  }
}