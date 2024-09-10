import Modalidade from '#models/modalidade'
import { createModalidadeValidator, messagesModalidadeProvider } from '#validators/modalidade'
import type { HttpContext } from '@adonisjs/core/http'

export default class ModalidadeController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const modalidade = await Modalidade.all()

    return view.render('pages/modalidade/index', { modalidade })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/modalidade/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const dados = request.all()

    const dadosValidos = await createModalidadeValidator.validate(dados, {
      messagesProvider: messagesModalidadeProvider,
    })

    const modalidade = await Modalidade.create({
      nome: dadosValidos.nome,
      genero: dadosValidos.genero,
      descricao: dadosValidos.descricao,


    })

    if (modalidade.$isPersisted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Modalidade ${modalidade.nome} cadastrada com sucesso!`,
      })
    }

    return response.redirect().toRoute('modalidade.index')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const modalidade = await Modalidade.find(params.id)

    return view.render('pages/modalidade/create', { modalidade })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, session }: HttpContext) {
    const modalidade = await Modalidade.find(params.id)

    if (!modalidade) {
      session.flash('notificacao', {
        type: 'danger',
        message: `Modalidade informada não encontrada!`,
      })
    }

    const dados = await createModalidadeValidator.validate(request.all(), {
      messagesProvider: messagesModalidadeProvider,
    })

    await modalidade?.merge(dados).save()

    if (modalidade?.$isPersisted) {
      session.flash('notificacao', {
        type: 'warning',
        message: `Organizacao ${modalidade.nome} atualizada com sucesso!`,
      })
    }

    return response.redirect().toRoute('organizacao.index')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const modalidade = await Modalidade.find(params.id)

    console.log(modalidade)

    await modalidade?.delete()

    if (modalidade?.$isDeleted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Modalidade excluída com sucesso!`,
      })
    }

    return response.redirect().toRoute('Modalidade.index')
  }
}
