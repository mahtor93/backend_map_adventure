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

async function getZoneMarkers(req, res){
    try{
        const {id_group_mark}= req.params;
        const result = await pool.query(`SELECT * FROM marks WHERE id_group_mark=$1`,[id_group_mark]);
        console.log('Valor de id_group_mark:', id_group_mark);
        console.log(id_group_mark);        
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

async function writeMarker(req,res){
    try{
        const {lat,lng,label,name_mark,id_group_mark} = req.body;
        const result = await pool.query('INSERT INTO  marks (lat, lng, label, name_mark, id_group_mark) VALUES ($1,$2,$3,$4,$5) RETURNING*',[lat,lng,label,name_mark,id_group_mark])
        res.status(201).json(result.rows[0]);
    }catch(error){
        console.error('Error al Ingresar datos:',error);
        res.status(500).json({error:"Error interno del servidor"});
    }
};


export { getAllMarkers,getAllGroupMarkers,getZoneMarkers,writeMarker };