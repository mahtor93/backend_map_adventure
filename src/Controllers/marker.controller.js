//Vamos a probar la conexión
import pool from '../config/db.config.js';

async function getAllMarkers(req, res){
    try{
        const result = await pool.query('SELECT * FROM marks WHERE id_group_mark=1');
        res.send({markers:result.rows});
    }catch(error){
        console.error('Error al obtener los datos de marcadores:',error);
        res.status(500).send('Error al obtener los marcadores');
    }
}

async function getAllGroupMarkers(req, res){
    try{
        const result = await pool.query('SELECT * FROM group_mark');
        res.send({groupMarkers: result.rows});
    }catch(error){
        console.error('Error al obtener los datos de zonas registradas:', error);
        res.status(500).send('Error al obtener los datos de las zonas registradas');
    }
}

export { getAllMarkers,getAllGroupMarkers };