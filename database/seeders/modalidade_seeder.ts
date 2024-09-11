import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Modalidade from '#models/modalidade'

export default class extends BaseSeeder {
  async run() {
    await Modalidade.createMany([
      {
        nome: 'Maratona 42 K Masculino',
        genero: 'Masculino',
        descricao: 'Maratona 42 K Masculino',
      },
    ])
  }
}