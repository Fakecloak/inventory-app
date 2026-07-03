const pool = require('../db/pool');

async function getAllCategories() {
    const {rows} = await pool.query(`SELECT * FROM categories ORDER BY name ASC`);
    return rows;
}

async function getCategoryById(id) {
    const {rows} = await pool.query(`SELECT * FROM categories WHERE id=$1`, [id]);
    return rows[0] || null;
}

async function createCategory(name, description,){
    const query = `
    INSERT INTO categories(name, description) VALUES 
    ($1, $2)
    RETURNING *
    `;

    const{rows} = await pool.query(query, [name,description])
    return rows[0]

}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,

}