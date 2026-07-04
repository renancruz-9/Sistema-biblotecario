import bcrypt from "bcrypt";
import userRepository from "../repositories/userRepository.js";   

const userService = {
    recuperarUsuarios: async (req, res) => {
        try {
            const resultado = await userRepository.selecionar();
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar usuários: " + error.message);
        }
    },
    recuperarUsuarioPorId: async (userId) => {
        try {
            const resultado = await userRepository.selecionarPorId(userId);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar usuário por ID: " + error.message);
        }
    },
    recuperarUsuarioPorEmail: async (email) => {
        try {
            const resultado = await userRepository.selecionarPorEmail(email);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar usuário por email: " + error.message);
        }
    },
    removerUsuario: async (userId) => {
        try {
            const resultado = await userRepository.deletar(userId);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao remover usuário: " + error.message);
        }
    },
    criarUsuario: async (user) => {
        try {
            const resultado = await userRepository.criar(user.name, user.email, user.password);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar usuário: " + error.message);
        }
    },
    atualizarUsuario: async (user) => {
        try {
            const resultado = await userRepository.atualizar(user.id, user.name, user.email, user.password);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar usuário: " + error.message);
        }
    },
    hashPassword: async (password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }
}

export default userService;