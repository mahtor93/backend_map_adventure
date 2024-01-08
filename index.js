import express, { json } from 'express';
import cors from 'cors';
import pool from './config/db.config.js';
import dotenv from 'dotenv';
dotenv.config({path:'.env'})


const app = express();

app.use(cors(
    {origin: process.env.FRONTEND_URL}
));

app.get('/ping',async (req,res)=>{
  const result = await pool.query('SELECT NOW()');
  const jsonResult = JSON.stringify(result.rows);
  res.send({
    pong: jsonResult,
  });
});


app.get('/users', async (req,res)=>{
  const result = await pool.query('SELECT * FROM marks WHERE id_group_mark=1');
  res.send({
    markers:result.rows,
  })

})

app.listen(3001,() =>{
    console.log("Runnng Server on port 3001")
})