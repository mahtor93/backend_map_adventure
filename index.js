import cors from 'cors';
import pool from './src/config/db.config.js';
import dotenv from 'dotenv';
import app from './app.js';
import router from './src/routes/marks.routes.js';
//import { getAllMarkers } from './src/models/marker.controller.js';
dotenv.config({
    path:'.env'
  });

const allowedOrigins = [
    process.env.FRONTEND_DEV_URL,
    process.env.FRONTEND_PROD_URL
  ];
app.use(cors(
    {
      origin: allowedOrigins,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }
));

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', `${process.env.FRONTEND_DEV_URL}, ${process.env.FRONTEND_PROD_URL}`);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/', router);

app.get('/ping',async (req,res)=>{
  const result = await pool.query('SELECT NOW()');
  const jsonResult = JSON.stringify(result.rows);
  res.send({
    pong: jsonResult,
  });
});


app.listen(3001,() =>{
    console.log("Runnng Server on port 3001")
})