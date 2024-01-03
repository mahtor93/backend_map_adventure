import express from 'express';
import cors from 'cors';
import pool from './config/db.config.js';

const app = express();



app.use(cors(
    {origin: 'http://localhost:3000'}
));

app.get('/ping',async (req,res)=>{
  const result = await pool.query('SELECT NOW()')
  console.log(result);
  res.send({
    pong: result.rows[0].now,
  });
});

app.get('/users', async (req,res)=>{


    res.send(
        { //esto debe salir de una base de datos. 
            mark1: { 
              lat: -36.812863439022, 
              lng: -73.1736491910276, 
              label:"Cueva del Pirata",
              icon: { 
                iconUrl: `/map_utilities/markers/land/cave.png`, 
                iconSize: [50,50]
              } 
            }, //Player
            mark3: { 
              lat: -36.765003045678036, 
              lng: -73.1828943630428, 
              label:"Teta Norte",
              icon: { 
                iconUrl: `/map_utilities/markers/land/savannah.png`,
                iconSize: [50,50]
              } 
            }, //Cave
            mark2: { 
              lat: -36.797523132216675, 
              lng: -73.17816721673245,
              label:"Playa Rocoto",
              icon: { 
                iconUrl: `/map_utilities/markers/land/beach.png`,
                iconSize: [50,50]
              } 
            }, //
            mark4: { 
              lat: -36.78358071599951, 
              lng: -73.21373377407333,
              label:"Punta Chome",
              icon: { 
                iconUrl: `/map_utilities/markers/land/grassland.png`, 
                iconSize: [50,50] 
              } 
            }, //
            mark5: { 
              lat: -36.76875857064171, 
              lng: -73.20465052631701,
              label:"Entre Chome y Perone",
              icon: { 
                iconUrl: `'/map_utilities/markers/land/'sea.png`, 
                iconSize: [50,50] 
              } 
            } //
        }
    )
});

app.listen(3001,() =>{
    console.log("Runnng Server on port 3001")
})