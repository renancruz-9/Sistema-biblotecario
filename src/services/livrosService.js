import bcrypt from "bcrypt";
import livroRepository from "../repositories/livroRepository.js";   
import Livro from "../models/Livro.js";

const livroService = {
    recuperarLivros: async (req, res) => {
        try {
            const resultado = await livroRepository.selecionar();
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar livros: " + error.message);
        }
    },
    recuperarLivroPorId: async (livroId) => {
        try {
            const resultado = await livroRepository.selecionarPorId(livroId);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar livro por ID: " + error.message);
        }
    },
    recuperarLivroPorIsbn: async (isbn) => {
        try {
            const resultado = await livroRepository.selecionarPorIsbn(isbn);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar Livro por ISBN: " + error.message);
        }
    },
    removerLivro: async (livroId) => {
        try {
            const resultado = await livroRepository.deletar(livroId);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao remover livro: " + error.message);
        }
    },
    criarLivro: async (livro, id_autor) => {
        try {
            const resultado = await livroRepository.criar(livro.titulo, livro.isbn, livro.anoPublicacao, livro.quantidade, id_autor);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar Livro: " + error.message);
        }
    },
    atualizarLivro: async (livro) => {
        try {
            const resultado = await livroRepository.atualizar(livro.id, livro.titulo, livro.isbn, livro.anoPublicacao);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar livro: " + error.message);
        }
    },
  
}

export default livroService;