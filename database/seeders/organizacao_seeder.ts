import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Organizacao from '#models/organizacao'

export default class extends BaseSeeder {
  async run() {
    await Organizacao.createMany([
      {
        email: 'fundacao@hotmail.com',
        password: '11223344',
        nome: 'Funcação Cultural',
        razao_social: 'Fundação Cultural de Jipa SA',
        cnpj: '76908628123487',
        telefone: '69992082241',
      },
    ])
  }
}