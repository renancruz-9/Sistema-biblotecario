import pool from '../configs/Database.js';

const livroRepositorys = {
    selecionar: async () => {
        const sql = 'SELECT id, titulo, isbn, ano_Publicacao FROM livros ORDER BY id DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (livroId) => {
        const sql = 'SELECT id, titulo, isbn, ano_Publicacao FROM livros WHERE id = ?;';
        const rows = await pool.execute(sql, [livroId]);
        return rows[0];
    },
    selecionarPorIsbn: async (isbn) => {
        const sql = 'SELECT id, titulo, isbn, ano_Publicacao FROM livros WHERE isbn = ?;';
        const rows = await pool.execute(sql, [isbn]);
        return rows[0][0];
    },
    deletar: async (livroId) => {
        const sql = 'DELETE FROM livro WHERE id = ?;';
        const resultado = await pool.execute(sql, [livroId]);
        return resultado[0];
    },
    criar: async (titulo, isbn, anoPublicacao, quantidade, id_autor) => {
        const sql = 'INSERT INTO Livro (titulo, isbn, ano_Publicacao, quantidade, id_Autor) VALUES (?, ?, ?, ?, ?);';
        const resultado = await pool.execute(sql, [titulo.trim(), isbn.trim().toLowerCase(), anoPublicacao, quantidade, id_autor]);
        return resultado[0];
    },
    atualizar: async (livroId, titulo, isbn, anoPublicacao) => {
        const sql = 'UPDATE livros SET titulo = ?, isbn = ?, ano_Publicacao = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [titulo.trim(), isbn.trim().toLowerCase(), anoPublicacao.trim(), livroId]);
        return resultado[0];
    }
}

export default livroRepositorys;