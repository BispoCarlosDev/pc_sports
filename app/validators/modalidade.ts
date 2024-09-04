import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesModalidadeProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',
  'withoutDecimals': 'O campo {{ field }} deve ser inteiro',
  'min': 'O campo {{ field }} deve ser no mínimo {{ min }}',

  'placa.regex': 'A placa deve ser no formato: AAA-9A99 ou AAA-9999',
  'situacao.enum': 'A opção selecionada é inválida, a opção deve ser: liberado ou manutencao',
})

export const createModalidadeValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(5), // Nome deve ter pelo menos 3 caracteres
    sexo: vine.string().trim().maxLength(1), // Sexo deve ter apenas uma letra, M ou F
    descricao: vine.string().trim().minLength(5), // Data de nascimento deve ser uma data válida
  })
)
