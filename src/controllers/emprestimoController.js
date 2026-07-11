import Emprestimo from "../models/Emprestimo.js";
import emprestimoRepositorys from "../repositories/emprestimoRepository.js";
import emprestimoService from "../services/emprestimoService.js";

const emprestimoController = {
    selecionar: async (req, res) => {
        try {
            const resultado = await emprestimoService.selecionar();

            res.status(200).json({
                message: "emprestimos recuperados com sucesso",
                data: resultado
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar emprestimo",
                error: error.message
            });
        }
    },
  
   
    criar: async (req, res) => {
        const { data_emprestimo, devolucao_prevista, data_devolucao, id_usuario, id_livro} = req.body;
        
        const emprestimo = new Emprestimo(data_emprestimo, devolucao_prevista, data_devolucao, id_usuario, id_livro);

        try {
            

            const resultado = await emprestimoService.criarEmprestimo(emprestimo);

            res.status(201).json({
                message: "Emprestimo criado com sucesso",
                data: {
                    id: resultado.insertId
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao criar emprestimo",
                error: error.message
            });
        }
    },
    atualizar: async (req, res) => {
        const emprestimoId = Number(req.params.id);
        const { data_emprestimo, devolucao_prevista, data_devolucao } = req.body;

        const emprestimo = new Emprestimo (data_emprestimo, devolucao_prevista, data_devolucao, null, null, emprestimoId);

        try {
            const resultado = await emprestimoService.atualizarEmprestimo(emprestimo);

            if (resultado.affectedRows === 0) {
                throw new Error("Emprestimo não encontrado");
            }

            res.status(200).json({
                message: "Emprestimo atualizado com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao atualizar Emprestimo",
                error: error.message
            });
        }
    }
};

export default emprestimoController;