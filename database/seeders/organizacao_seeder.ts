import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Organizacao from '#models/organizacao'

export default class extends BaseSeeder {
  async run() {
    await Organizacao.createMany([
      {
        email: 'Fonbec',
        password: 'Fonbec',
        nome: 'Fonbec',
        razao_social: 'Fonbec',
        cnpj: 'Fonbec',
        telefone: 'Fonbec',
      },
    ])
  }
}