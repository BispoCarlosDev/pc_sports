import Organizacao from '#models/organizacao'
import type { HttpContext } from '@adonisjs/core/http'

export default class OrganizacaoController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const organizacoes = await Organizacao.all()

    return view.render('pages/cadastroorganizacao', { organizacoes })
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