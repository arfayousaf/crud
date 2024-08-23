import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';


const app=express();


app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.get('/get', (request,response)=>{
response.send('api response got      First server created successfully :) ')
})

dotenv.config()
let port=process.env.PORT


app.use(express.json());
app.listen(port, ()=>{
    console.log("server is started :" ,port);
})

