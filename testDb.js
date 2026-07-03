const pool = require("./db/pool");

async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Database connected!");
        console.log(result.rows[0]);
    } catch (err) {
        console.error(err);
    } finally {
        await pool.end();
    }
}

testConnection();