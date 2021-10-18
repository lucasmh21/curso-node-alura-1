const database = require('../models');

class PessoaController{
    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaPessoaPorId(req, res){
        const { id } = req.params;
        try {
            const pessoa = await database.Pessoas.findByPk(Number(id));
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cadastraPessoa(req, res){
        try {
            const pessoa = req.body;
            const resultado = await database.Pessoas.create(pessoa);
            return res.status(201).json(resultado);
        } catch (error){
            return res.status(500).json(error);
        }
    }

    static async atualizaPessoa(req,res){
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;
            await database.Pessoas.update(dadosAtualizados, {where: {id: Number(id)}});
            const pessoa = await database.Pessoas.findByPk(Number(id));
            return res.status(201).json(pessoa);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async deletePessoa(req, res){
        try {
            const { id } = req.params;
            await database.Pessoas.destroy({where: {id: Number(id)}});
            return res.status(200).json({ mensagem: `Registro ${id} excluido com sucesso!`});
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = PessoaController