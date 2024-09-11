import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Competidor from '#models/competidor'

export default class extends BaseSeeder {
  async run() {
    await Competidor.createMany([
      {
        email: 'fundacao@hotmail.com',
        password: '11223344',
        nome: 'John Wick',
        genero: 'Masculino',
        telefone: '69992082241',
        cpf: '741741741741741',
      },
    ])
  }
}