import pool from './config/db.config.js';

async function getMarkers(){
    try{
        const result = await pool.quert('SELECT * FROM marks WHERE id_group_mark=1');
        const jsonResult = JSON.stringify(result.rows);
        return jsonResult;
    }catch(error){
        console.error('Error al obtener los datos de marcadores:',error);
        throw error;
    }
}

module.exports = { getMarkers };