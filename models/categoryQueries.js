const pool = require('../db/pool');

async function getAllCategories() {
    const {rows} = await pool.query(`SELECT * FROM categories ORDER BY name ASC`);
    return rows;
}

async function getCategoryById(id) {
    const {rows} = await pool.query(`SELECT * FROM categories WHERE id=$1`, [id]);
    return rows[0] || null;
}

module.exports = {
    getAllCategories,
    getCategoryById,
}