import Organizacao from '#models/organizacao'
import Evento from '#models/evento'
import { createEventoValidator, messagesEventoProvider } from '#validators/evento'
import type { HttpContext } from '@adonisjs/core/http'

export default class EventoController {
  async index({ view }: HttpContext) {
    const eventos = await Evento.query().preload('organizacao')

    return view.render('pages/evento/index', { eventos })
  }

  async create({ view }: HttpContext) {
    const organizacoes = await Organizacao.all()

    return view.render('pages/evento/create', { organizacoes })
  }

  async store({ request, response, session }: HttpContext) {
    const dados = request.all()

    const dadosValidos = await createEventoValidator.validate(dados, {
      messagesProvider: messagesEventoProvider,
    })

    const organizacao = await Organizacao.find(dadosValidos.organizacao)

    if (!organizacao) {
      session.flash('notificacao', {
        type: 'danger',
        message: `A Organização informada não foi encontrado!`,
      })

      return response.redirect().toRoute('evento.index')
    }

    const evento = await Evento.create({
        nome: dadosValidos.nome,
        local: dadosValidos.local,
      })
  
      await evento.related('organizacao').associate(organizacao)
  
      if (evento.$isPersisted) {
        session.flash('notificacao', {
          type: 'success',
          message: `Evento ${evento.nome} cadastrado com sucesso!`,
        })
      }
      return response.redirect().toRoute('evento.index')
    }
  
    async show({ params }: HttpContext) {}
  
    async edit({ params, view }: HttpContext) {
      const evento = await Evento.find(params.id)
  
      return view.render('pages/evento/create', { evento })
    }
  
    async update({ params, request, response, session }: HttpContext) {
      const evento = await Evento.find(params.id)
  
      if (!evento) {
        session.flash('notificacao', {
          type: 'danger',
          message: `Evento informado não encontrado!`,
        })
      }
      const dados = await createEventoValidator.validate(request.all(), {
        messagesProvider: messagesEventoProvider,
      })
      await evento?.merge(dados).save()
      if (evento?.$isPersisted) {
        session.flash('notificacao', {
          type: 'warning',
          message: `Evento ${evento.nome} atualizado com sucesso!`,
        })
      }
      return response.redirect().toRoute('evento.index')
    }
  
    async destroy({ params, session, response }: HttpContext) {
      const evento = await Evento.find(params.id)
  
      await evento?.delete()
  
      if (evento?.$isDeleted) {
        session.flash('notificacao', {
          type: 'success',
          message: `Evento excluído com sucesso!`,
        })
      }
      return response.redirect().toRoute('evento.index')
    }
  }