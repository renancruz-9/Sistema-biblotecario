import pool from '../configs/Database.js';

const livroRepositorys = {
    selecionar: async () => {
        const sql = 'SELECT titulo, isbn, ano_Publicacao, quantidade, id_Autor FROM Livro ORDER BY id DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (livroId) => {
        const sql = 'SELECT titulo, isbn, ano_Publicacao, quantidade, id_Autor FROM Livro WHERE id = ?;';
        const rows = await pool.execute(sql, [livroId]);
        return rows[0];
    },
    selecionarPorIsbn: async (livroIsbn) => {
        const sql = 'SELECT titulo, isbn, ano_Publicacao, quantidade, id_Autor FROM Livro WHERE isbn = ?;';
        const rows = await pool.execute(sql, [livroIsbn]);
        return rows[0];
    },
    deletar: async (livroId) => {
        const sql = 'DELETE FROM Livro WHERE id = ?;';
        const resultado = await pool.execute(sql, [livroId]);
        return resultado[0];
    },
    criar: async (titulo, isbn, anoPublicacao, quantidade, id_autor) => {
        const sql = 'INSERT INTO Livro (titulo, isbn, ano_Publicacao, quantidade, id_Autor) VALUES (?, ?, ?, ?, ?);';
        const resultado = await pool.execute(sql, [titulo.trim(), isbn.trim().toLowerCase(), anoPublicacao, quantidade, id_autor]);
        return resultado[0];
    },
    atualizar: async (livroId, titulo, isbn, anoPublicacao, quantidade) => {
        const sql = 'UPDATE Livro SET titulo = ?, isbn = ?, ano_Publicacao = ?, quantidade = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [titulo.trim(), isbn.trim().toLowerCase(), anoPublicacao.trim(), quantidade, livroId]);
        return resultado[0];
    }
}

export default livroRepositorys;