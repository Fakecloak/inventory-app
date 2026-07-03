const pool = require('../db/pool');

async function getItemsByCategoryId(id) {
    const {rows} = await pool.query(`SELECT * FROM items WHERE category_id=$1 ORDER BY name ASC`, [id]);
    return rows;
} 

async function getItemById(itemId){
    const query = 
    `
    SELECT items.*, categories.name AS category_name FROM items 
    LEFT jOIN categories ON items.category_id = categories.id 
    WHERE items.id = $1
    `;
    const {rows} = await pool.query(query,[itemId])

    return rows[0] || null;
}
module.exports = {
    getItemsByCategoryId,
    getItemById,
}