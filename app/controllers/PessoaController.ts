import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pessoa from 'App/Models/Pessoa'

export default class PessoaController {
    public async salvar({ request, response }: HttpContextContract) {
        const dadosAtleta = request.only(['nome', 'telefone', 'dataNascimento', 'cpf'])

        const pessoa = new Pessoa()
        pessoa.nome = dadosAtleta.nome
        pessoa.telefone = dadosAtleta.telefone
        pessoa.dataNascimento = dadosAtleta.dataNascimento
        pessoa.cpf = dadosAtleta.cpf

        await pessoa.save()

        return response.json({ success: true })
    }
}
