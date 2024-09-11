import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesEventoProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',
  'withoutDecimals': 'O campo {{ field }} deve ser inteiro',
  'min': 'O campo {{ field }} deve ser no mínimo {{ min }}',

  'placa.regex': 'A placa deve ser no formato: AAA-9A99 ou AAA-9999',
  'genero.enum': 'A opção selecionada é inválida, a opção deve ser: Masculino ou Feminino',
})

/**
 *
 * Validação de Competidores - create
 */
export const createEventoValidator = vine.compile(
    vine.object({
      organizacao: vine.number(),
      modalidade: vine.number(),
      nome: vine.string().trim().minLength(8),
      local: vine.string().trim().minLength(8),
      //dataInicio: vine.date().trim().regex(/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/),
      //dataFim: vine.date().trim().regex(/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/),
      //dataInicio: vine.string().trim().regex(/^\d{2}\/\d{2}\/\d{4}$/),
      //dataFim: vine.string().trim().regex(/^\d{2}\/\d{2}\/\d{4}$/),
    })
  )
