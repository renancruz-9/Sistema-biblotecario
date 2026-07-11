import AutorRepository from "../repositories/autorRepository.js";
import AutorService from "../services/autorService.js";
import Autor from "../models/Autor.js";

const autorController = {
    selecionar: async (req, res) => {
         try {
            const resultado = await AutorService.recuperarAutor();

            res.status(200).json({
                message: "Autores recuperados com sucesso",
                data: resultado
            });
        }
         catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar autores",
                error: error.message
            });
        }
    },
    selecionarPorId: async (req, res) => {
            const autorId = Number(req.params.id);

         try {
            const Autor = await AutorService.recuperarAutorPorId(autorId);

            if (!Autor) {
              return res.status(404).json({
                message: "Autor não encontrado"
            });
            }

            res.status(200).json({
                message: "O autor foi recuperado com sucesso",
                data: Autor
            });
        }
         catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar o autor",
                error: error.message
             });
        }
    },
    deletar: async (req, res) => {
             const autorId = Number(req.params.id);

         try {
             const resultado = await AutorService.removerAutor(autorId);

            if (resultado.affectedRows === 0) {
                throw new Error (" Autor não encontrado")
            }        

            res.status(200).json({
                message: "Autor removido com sucesso"
            });
        }
         catch (error) {
            console.error(error);
            res.status(500).json({
                 message: "Erro ao remover o autor",
                 error: error.message
            });
        }
    },
    criar:  async (req, res) => {
            const { nome, nacionalidade, data_nascimento } = req.body;
            const autor = new Autor(nome, nacionalidade, data_nascimento);

         try {
            // validação simples para garantir que name e email não estejam vazios
            if (nome.trim() === "" || nacionalidade.trim() === "" || data_nascimento.trim() === "") {
                return res.status(400).json({
                    message: "Nome, nacionalidade e data de nascimento são obrigatórios"
                });
            }

            const resultado = await AutorService.criarAutor(autor);

            res.status(201).json({
                message: "autor criado com sucesso",
                data: {
                    id: resultado.insertId
                }
            });
        }
         catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao criar o autor",
                error: error.message
            });
        }
    },
    atualizar: async (req, res) => {
                const autorId = Number(req.params.id);
                const { nome, nacionalidade, data_nascimento } = req.body;
                const autor = new Autor(nome, nacionalidade, data_nascimento, autorId);

         try {
            // validação simples para garantir que name e email não estejam vazios
            if (nome.trim() === "" || nacionalidade.trim() === "") {
                return res.status(400).json({
                    message: "Nome, nacionalidade e data de nascimento são obrigatórios"
             });
            }

                const resultado = await AutorService.atualizarAutor(autor);

            if (resultado.affectedRows === 0) {
                throw new Error("Autor não encontrado");
            }

            res.status(200).json({
                message: "Autor atualizado com sucesso"
            });
        }
         catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao atualizar Autor",
                error: error.message
            });
        }
    }
};

export default autorController;