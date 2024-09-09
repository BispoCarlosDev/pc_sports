import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesCompetidorProvider = new SimpleMessagesProvider({
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
export const createCompetidorValidator = vine.compile(
    vine.object({
      //marca: vine.string().trim().minLength(3),
      email: vine.string().trim().minLength(8),
      //anoFabricacao: vine.number().withoutDecimals().min(2000),
      password: vine.string().trim().minLength(8),
      //situacao: vine.enum(['liberado', 'manutencao']),
      nome: vine.string().trim().minLength(8),
      /*placa: vine
      .string()
      .regex(/^[A-Z]{3}-[0-9][A-Z0-9][0-9]{2}$/)
      .trim(),*/
      genero: vine.enum(['Masculino', 'Feminino']),
      telefone: vine.string().trim().minLength(8),
      cpf: vine.string().trim().minLength(11),

      // AAA-8900
      // AAA-8A00
    })
  )