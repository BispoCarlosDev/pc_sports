import Organizacao from '#models/organizacao'
import { createOrganizacaoValidator, messagesOrganizacaoProvider } from '#validators/organizacao'
import type { HttpContext } from '@adonisjs/core/http'

export default class OrganizacaoController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const organizacao = await Organizacao.all()

    return view.render('pages/organizacao/index', { organizacao })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/organizacao/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const dados = request.all()

    const dadosValidos = await createOrganizacaoValidator.validate(dados, {
      messagesProvider: messagesOrganizacaoProvider,
    })

    const organizacao = await Organizacao.create({
      email: dadosValidos.email,
      password: dadosValidos.password,
      nome: dadosValidos.nome,
      razao_social: dadosValidos.razao_social,
      cnpj: dadosValidos.cnpj,
      telefone: dadosValidos.telefone,

    })

    if (organizacao.$isPersisted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Organizacao ${organizacao.nome} cadastrada com sucesso!`,
      })
    }

    return response.redirect().toRoute('organizacao.index')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const organizacao = await Organizacao.find(params.id)

    return view.render('pages/organizacao/create', { organizacao })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, session }: HttpContext) {
    const organizacao = await Organizacao.find(params.id)

    if (!organizacao) {
      session.flash('notificacao', {
        type: 'danger',
        message: `Organizacao informada não encontrada!`,
      })
    }

    const dados = await createOrganizacaoValidator.validate(request.all(), {
      messagesProvider: messagesOrganizacaoProvider,
    })

    await organizacao?.merge(dados).save()

    if (organizacao?.$isPersisted) {
      session.flash('notificacao', {
        type: 'warning',
        message: `Organizacao ${organizacao.nome} atualizada com sucesso!`,
      })
    }

    return response.redirect().toRoute('organizacao.index')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const organizacao = await Organizacao.find(params.id)

    console.log(organizacao)

    await organizacao?.delete()

    if (organizacao?.$isDeleted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Organização excluída com sucesso!`,
      })
    }

    return response.redirect().toRoute('organizacao.index')
  }
}
