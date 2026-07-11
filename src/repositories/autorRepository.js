import pool from '../configs/Database.js';

const autorRepository = {
    selecionar: async () => {
        const sql = 'SELECT id, nome, nacionalidade, data_nascimento FROM autor ORDER BY id DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (autorId) => {
        const sql = 'SELECT id, nome, nacionalidade, data_nascimento FROM autor WHERE id = ?;';
        const rows = await pool.execute(sql, [autorId]);
        return rows[0];
    },
    deletar: async (userId) => {
        const sql = 'DELETE FROM autor WHERE id = ?;';
        const resultado = await pool.execute(sql, [userId]);
        return resultado[0];
    },
    criar: async (nome, nacionalidade, data_nascimento) => {
        const sql = 'INSERT INTO autor (nome, nacionalidade, data_nascimento) VALUES (?, ?, ?);';
        const resultado = await pool.execute(sql, [nome, nacionalidade, data_nascimento]);
        return resultado[0];
    },
    atualizar: async (autorId, nome, nacionalidade, data_nascimento) => {
        const sql = 'UPDATE autor SET nome = ?, nacionalidade = ?, data_nascimento = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [nome.trim(), nacionalidade.trim().toLowerCase(), data_nascimento, autorId]);
        return resultado[0];
    }
}

export default autorRepository;