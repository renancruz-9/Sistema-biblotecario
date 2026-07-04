import Livro from "../models/Livro.js";
import livroRepository from "../repositories/livroRepository.js";
import livroService from "../services/livrosService.js";

const livroController = {
    selecionar: async (req, res) => {
        try {
            const resultado = await livroService.recuperarLivros();

            res.status(200).json({
                message: "Livros recuperados com sucesso",
                data: resultado
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar Livros",
                error: error.message
            });
        }
    },
    selecionarPorId: async (req, res) => {
        const livroId = Number(req.params.id);

        try {
            const livro = await livroService.recuperarLivroPorId(livroId);

            if (!livro) {
                return res.status(404).json({
                    message: "Livros não encontrado"
                });
            }

            res.status(200).json({
                message: "Livro recuperado com sucesso",
                data: livros
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar Livro",
                error: error.message
            });
        }
    },
    deletar: async (req, res) => {
        const livroId = Number(req.params.id);

        try {
            const resultado = await livroService.removerLivro(livroId);

            if(resultado.affectedRows === 0) {
                throw new Error("Livros não encontrados");
            }

            res.status(200).json({
                message: "Livro removido com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao remover livro",
                error: error.message
            });
        }
    },
    criar: async (req, res) => {
        const { titulo, isbn, anoPublicacao, quantidade, id_autor} = req.body;
        

        const livro = new Livro(titulo, isbn, anoPublicacao, quantidade);

        try {
            // validação simples para garantir que name e email não estejam vazios
            if (titulo.trim() === "" || isbn.trim() === "" || quantidade <= 0 ) {
                return res.status(400).json({
                    message: "Titulo, isbn e ano de publicação são obrigatórios"
                });
            }

            const resultado = await livroService.criarLivro(livro, id_autor);

            res.status(201).json({
                message: "Livro criado com sucesso",
                data: {
                    id: resultado.insertId
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao criar livro",
                error: error.message
            });
        }
    },
    atualizar: async (req, res) => {
        const livroId = Number(req.params.id);
        const { titulo, isbn, anoPublicacao } = req.body;

        const livro = new Livro(titulo,isbn, anoPublicacao, livroId);

        try {
            // validação simples para garantir que name e email não estejam vazios
            if (titulo.trim() === "" || isbn.trim() === '' || anoPublicacao.trim() === '') {
                return res.status(400).json({
                    message: "titulo do livro isbn e ano da publicaçao são obrigatorios"
                });
            }

            const resultado = await livroService.atualizarLivro(livro);

            if (resultado.affectedRows === 0) {
                throw new Error("Livro não encontrado");
            }

            res.status(200).json({
                message: "livro atualizado com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao atualizar livro",
                error: error.message
            });
        }
    }
};

export default livroController;