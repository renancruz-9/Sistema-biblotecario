import bcrypt from "bcrypt";   
import autorRepository from "../repositories/autorRepository.js";

const autorService = {
    recuperarUsuarios: async (req, res) => {
        try {
            const resultado = await autorRepository.selecionar();
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar usuários: " + error.message);
        }
    },
    recuperarUsuarioPorId: async (userId) => {
        try {
            const resultado = await autorRepository.selecionarPorId(userId);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar usuário por ID: " + error.message);
        }
    },
    recuperarUsuarioPorEmail: async (email) => {
        try {
            const resultado = await autorRepository.selecionarPorEmail(email);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar usuário por email: " + error.message);
        }
    },
    removerUsuario: async (userId) => {
        try {
            const resultado = await autorRepository.deletar(userId);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao remover usuário: " + error.message);
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
    atualizarUsuario: async (user) => {
        try {
            const resultado = await autorRepository.atualizar(user.id, user.name, user.email, user.password);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar usuário: " + error.message);
        }
    }
}

export default autorService;