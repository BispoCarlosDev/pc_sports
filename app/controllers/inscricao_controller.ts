import Competidor from '#models/competidor'
import Evento from '#models/evento'
import Modalidade from '#models/modalidade'
import Inscricao from '#models/inscricao'
import { createInscricaoValidator, messagesInscricaoProvider } from '#validators/inscricao'
import type { HttpContext } from '@adonisjs/core/http'

export default class InscricaoController {
  async index({ view }: HttpContext) {
    const inscricoes = await Inscricao.query().preload('evento').preload('competidor').preload('modalidade')

    return view.render('pages/inscricao/index', { inscricoes })
  }

  async create({ view }: HttpContext) {
    const competidores = await Competidor.all()
    const modalidades = await Modalidade.all()
    const eventos = await Evento.all()
    return view.render('pages/inscricao/create', { competidores, modalidades, eventos })
  }

  async store({ request, response, session }: HttpContext) {
    const dados = request.all()

    const dadosValidos = await createInscricaoValidator.validate(dados, {
      messagesProvider: messagesInscricaoProvider,
    })

    const competidor = await Competidor.find(dadosValidos.competidor)
    const modalidade = await Modalidade.find(dadosValidos.modalidade)
    const evento = await Evento.find(dadosValidos.evento)

    if (!competidor) {
      session.flash('notificacao', {
        type: 'danger',
        message: `O Competidor Informado não foi encontrado!`,
      })

      return response.redirect().toRoute('inscricao.index')
    }

    if (!modalidade) {
      session.flash('notificacao', {
        type: 'danger',
        message: `A Modalidade informada não foi encontrada`,
      })

      return response.redirect().toRoute('inscricao.index')
    }

    if (!evento) {
        session.flash('notificacao', {
          type: 'danger',
          message: `O Evento informado não foi encontrada`,
        })
  
        return response.redirect().toRoute('inscricao.index')
      }

    const inscricao = await Inscricao.create({
        valor: dadosValidos.valor,
        status: dadosValidos.status,
      })
  
      await inscricao.related('competidor').associate(competidor)

      await inscricao.related('modalidade').associate(modalidade)

      await inscricao.related('evento').associate(evento)
  
      if (inscricao.$isPersisted) {
        session.flash('notificacao', {
          type: 'success',
          message: `Inscrição ${inscricao.id} realizada com sucesso!`,
        })
      }
      return response.redirect().toRoute('inscricao.index')
    }
  
    async show({ params }: HttpContext) {}
  
    async edit({ params, view }: HttpContext) {
      const inscricao = await Inscricao.find(params.id)
  
      return view.render('pages/inscricao/create', { inscricao })
    }
  
    async update({ params, request, response, session }: HttpContext) {
      const inscricao = await Inscricao.find(params.id)
  
      if (!inscricao) {
        session.flash('notificacao', {
          type: 'danger',
          message: `Inscrição Informada não encontrada!`,
        })
      }
      const dados = await createInscricaoValidator.validate(request.all(), {
        messagesProvider: messagesInscricaoProvider,
      })
      await inscricao?.merge(dados).save()
      if (inscricao?.$isPersisted) {
        session.flash('notificacao', {
          type: 'warning',
          message: `Inscrição ${inscricao.id} atualizada com sucesso!`,
        })
      }
      return response.redirect().toRoute('inscricao.index')
    }
  
    async destroy({ params, session, response }: HttpContext) {
      const inscricao = await Inscricao.find(params.id)
  
      await inscricao?.delete()
  
      if (inscricao?.$isDeleted) {
        session.flash('notificacao', {
          type: 'success',
          message: `Inscrição excluída com sucesso!`,
        })
      }
      return response.redirect().toRoute('inscricao.index')
    }
  }