const pool = require('../db/pool');

async function getItemsByCategoryId(id) {
    const {rows} = await pool.query(`SELECT * FROM items WHERE category_id=$1 ORDER BY name ASC`, [id]);
    return rows;
} 

module.exports = {
    getItemsByCategoryId,
}