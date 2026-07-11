import pool from '../configs/Database.js';

const emprestimoRepository = {
    selecionar: async () => {
        const sql = 'SELECT l.titulo, u.nome, e.data_devolucao, e.data_emprestimo, e.devolucao_prevista FROM emprestimo AS e INNER JOIN Livro AS l ON l.id = e.id_livro INNER JOIN usuario AS u ON u.id = e.id_usuario;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    criar: async (data_emprestimo, devolucao_prevista, data_devolucao, id_usuario, id_livro) => {
        console.log(data_emprestimo, devolucao_prevista, data_devolucao, id_usuario, id_livro)
        const sql = 'INSERT INTO emprestimo (data_emprestimo, devolucao_prevista, data_devolucao, id_Usuario, id_Livro) VALUES (?, ?, ?, ?, ?);';
        const resultado = await pool.execute(sql, [data_emprestimo, devolucao_prevista, data_devolucao, id_usuario, id_livro]);
        return resultado[0];
    },
    atualizar: async (data_emprestimo, devolucao_prevista, data_devolucao, emprestimoId) => {
           console.log(data_emprestimo, devolucao_prevista, data_devolucao, emprestimoId)
        const sql = 'UPDATE emprestimo SET data_emprestimo = ?, devolucao_prevista = ?, data_devolucao = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [data_emprestimo, devolucao_prevista, data_devolucao, emprestimoId]);
     
        return resultado[0];
    }
}

export default emprestimoRepository;