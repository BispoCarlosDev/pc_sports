import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesOrganizacaoProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',
  'withoutDecimals': 'O campo {{ field }} deve ser inteiro',
  'min': 'O campo {{ field }} deve ser no mínimo {{ min }}',

  'placa.regex': 'A placa deve ser no formato: AAA-9A99 ou AAA-9999',
  'situacao.enum': 'A opção selecionada é inválida, a opção deve ser: liberado ou manutencao',
})

export const createOrganizacaoValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(5), // Nome deve ter pelo menos 5 caracteres
    cnpj: vine.string().trim().minLength(14).maxLength(14), // Deve ter 14 dígitos
    razaoSocial: vine.string().minLength(5), // Deve ter pelo menos 5 dígitos
    dataAbertura: vine.date(), // Formato de data
  })
)
