import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesEventoProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',
  'withoutDecimals': 'O campo {{ field }} deve ser inteiro',
  'min': 'O campo {{ field }} deve ser no mínimo {{ min }}',

  'placa.regex': 'A placa deve ser no formato: AAA-9A99 ou AAA-9999',
  'situacao.enum': 'A opção selecionada é inválida, a opção deve ser: liberado ou manutencao',
})

export const createEventoValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(3), // Nome deve ter pelo menos 3 caracteres
    telefone: vine.string().regex(/^\+?\d{10,15}$/).trim(), // Telefone deve ser numérico e ter entre 10 e 15 dígitos, pode incluir código do país
    dataInicio: vine.date(), // Data de nascimento deve ser uma data válida
    dataFim: vine.date(), // Data de nascimento deve ser uma data válida
    local: vine.string().trim().minLength(11).maxLength(11), // Deve ter 14 dígitos
  })
)
