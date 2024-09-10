import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'organizacaos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('email').notNullable()
      table.string('password').notNullable()
      table.string('nome').notNullable()
      table.string('razao_social').notNullable()
      table.string('cnpj').notNullable()
      table.string('telefone').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
