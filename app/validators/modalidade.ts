import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesModalidadeProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',
  'withoutDecimals': 'O campo {{ field }} deve ser inteiro',
  'min': 'O campo {{ field }} deve ser no mínimo {{ min }}',

  'placa.regex': 'A placa deve ser no formato: AAA-9A99 ou AAA-9999',
  'genero.enum': 'A opção selecionada é inválida, a opção deve ser: Masculino ou Feminino',
})

/**
 * Validação de Competidores - create
 */
export const createModalidadeValidator = vine.compile(
    vine.object({
      nome: vine.string().trim().minLength(8),
      genero: vine.enum(['Masculino', 'Feminino']),
      descricao: vine.string().trim().minLength(8),
    })
  )
