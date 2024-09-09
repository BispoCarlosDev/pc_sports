import Competidor from '#models/competidor'
import { createCompetidorValidator, messagesCompetidorProvider } from '#validators/competidor'
import type { HttpContext } from '@adonisjs/core/http'

export default class CompetidorController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const competidor = await Competidor.all()

    return view.render('pages/competidor/index', { competidor })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/competidor/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const dados = request.all()

    const dadosValidos = await createCompetidorValidator.validate(dados, {
      messagesProvider: messagesCompetidorProvider,
    })

    const competidor = await Competidor.create({
      email: dadosValidos.email,
      password: dadosValidos.password,
      nome: dadosValidos.nome,
      genero: dadosValidos.genero,
      telefone: dadosValidos.telefone,
      cpf: dadosValidos.cpf,
    })

    if (competidor.$isPersisted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Competidor ${competidor.nome} cadastrado com sucesso!`,
      })
    }

    return response.redirect().toRoute('competidor.index')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const competidor = await Competidor.find(params.id)

    return view.render('pages/competidor/create', { competidor })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, session }: HttpContext) {
    const competidor = await Competidor.find(params.id)

    if (!competidor) {
      session.flash('notificacao', {
        type: 'danger',
        message: `Competidor informado não encontrado!`,
      })
    }

    const dados = await createCompetidorValidator.validate(request.all(), {
      messagesProvider: messagesCompetidorProvider,
    })

    await competidor?.merge(dados).save()

    if (competidor?.$isPersisted) {
      session.flash('notificacao', {
        type: 'warning',
        message: `Competidor ${competidor.nome} atualizado com sucesso!`,
      })
    }

    return response.redirect().toRoute('competidor.index')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const competidor = await Competidor.find(params.id)

    console.log(competidor)

    await competidor?.delete()

    if (competidor?.$isDeleted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Competidor excluído com sucesso!`,
      })
    }

    return response.redirect().toRoute('competidor.index')
  }
}
