import Inscricao from '#models/inscricao'
//import { createInscricaoValidator, messagesInscricaoProvider } from '#validators/inscricao'
import type { HttpContext } from '@adonisjs/core/http'

export default class InscricaoController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const inscricoes = await Inscricao.all()

    return view.render('pages/inscricao', { inscricoes })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  //async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}