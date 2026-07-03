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

async function createItem(name, description, manufacturer, price, stock_quantity, category_id){
    const query = `
    INSERT INTO items (name, description, manufacturer, price, stock_quantity, category_id) VALUES 
    ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `;

    const{rows} = await pool.query(query, [name, description, manufacturer, price, stock_quantity, category_id])
    return rows[0]

}

async function deleteItem(id){
    await pool.query(`DELETE FROM items WHERE id = $1`,[id])
}
module.exports = {
    getItemsByCategoryId,
    getItemById,
    deleteItem,
    createItem,

}