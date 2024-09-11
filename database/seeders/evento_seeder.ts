import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Evento from '#models/evento'

export default class extends BaseSeeder {
  async run() {
    await Evento.createMany([
      {
        nome: 'Manhã Animada',
        local: 'Centro Desportivo Cedel',
      },
    ])
  }
}