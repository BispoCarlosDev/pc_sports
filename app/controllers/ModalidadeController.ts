import Modalidade from '#models/modalidade'
import type { HttpContext } from '@adonisjs/core/http'

export default class ModalidadeController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const modalidades = await Modalidade.all()

    return view.render('pages/consultamodalidade', { modalidades })
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