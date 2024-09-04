import Pessoa from '#models/pessoa'
import type { HttpContext } from '@adonisjs/core/http'

export default class PessoaController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const pessoas = await Pessoa.all()

    return view.render('pages/consultaatleta', { pessoas })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  //async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  //async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  //async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  //async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  //async destroy({ params }: HttpContext) {}
}