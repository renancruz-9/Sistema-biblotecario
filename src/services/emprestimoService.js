import emprestimo from "../models/Emprestimo.js";
import emprestimoRepository from "../repositories/emprestimoRepository.js";

const emprestimoService = {
    selecionar: async () => {
        try {
            const resultado = await emprestimoRepository.selecionar();

            return resultado;
 
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar emprestimo: " + error.message);
        }
    },
    criarEmprestimo: async (emprestimo) => {
          try {
            const resultado = await emprestimoRepository.criar(emprestimo.data_emprestimo, emprestimo.devolucao_prevista, emprestimo.data_devolucao, emprestimo.id_usuario, emprestimo.id_livro);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar emprestimo: " + error.message);
        }
    },
    atualizarEmprestimo: async (emprestimo) => {
        try {
            const resultado = await emprestimoRepository.atualizar(emprestimo.data_emprestimo, emprestimo.devolucao_prevista, emprestimo.data_devolucao, emprestimo.id);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar emprestimo: " + error.message);
        }
    },
}

export default emprestimoService;