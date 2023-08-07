const pool = require('../config/conexion');

const get_usuario_model = async (req, res) => {
    console.log("modelo");
    try {
        const query = "SELECT * FROM USUARIOS limit 10";
        const [rows] = await pool.query(query);
        console.log(rows);
        return rows;
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    get_usuario_model,
};