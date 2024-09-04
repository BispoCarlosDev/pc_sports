import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesInscricaoProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',
  'withoutDecimals': 'O campo {{ field }} deve ser inteiro',
  'min': 'O campo {{ field }} deve ser no mínimo {{ min }}',

  'placa.regex': 'A placa deve ser no formato: AAA-9A99 ou AAA-9999',
  'situacao.enum': 'A opção selecionada é inválida, a opção deve ser: liberado ou manutencao',
})

export const createInscricaoValidator = vine.compile(
  vine.object({
    valor: vine.number(), // Telefone deve ser numérico e ter entre 10 e 15 dígitos, pode incluir código do país
    dataInscricao: vine.date(), // Data de nascimento deve ser uma data válida
    status: vine.boolean(), // Deve ter 14 dígitos
  })
)
