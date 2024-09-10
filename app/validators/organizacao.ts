import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesOrganizacaoProvider = new SimpleMessagesProvider({
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
export const createOrganizacaoValidator = vine.compile(
    vine.object({
      email: vine.string().trim().minLength(8),
      password: vine.string().trim().minLength(8),
      nome: vine.string().trim().minLength(8),
      razao_social: vine.string(),
      cnpj: vine.string().trim().minLength(11),
      telefone: vine.string().trim().minLength(8),
    })
  )
