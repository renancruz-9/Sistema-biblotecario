import bcrypt from "bcrypt";   
import autorRepository from "../repositories/autorRepository.js";

const autorService = {
    recuperarAutor: async (req, res) => {
        try {
            const resultado = await autorRepository.selecionar();
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar autores: " + error.message);
        }
    },
    recuperarAutorPorId: async (autorId) => {
        try {
            const resultado = await autorRepository.selecionarPorId(autorId);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar autor por ID: " + error.message);
        }
    },
    removerAutor: async (autorId) => {
        try {
            const resultado = await autorRepository.deletar(autorId);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao remover autor: " + error.message);
        }
    },
    criarAutor: async (autor) => {
        try {
            const resultado = await autorRepository.criar(autor.nome, autor.nacionalidade, autor.data_nascimento);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar usuário: " + error.message);
        }
    },
    atualizarAutor: async (autor) => {
        try {
            console.log(autor.nome, autor.nacionalidade, autor.data_nascimento)
            const resultado = await autorRepository.atualizar(autor.id, autor.nome, autor.nacionalidade, autor.data_nascimento);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar autor: " + error.message);
        }
    }
}

export default autorService;