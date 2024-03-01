const express=require('express');
const port=30002;
const app=express();
app.get('/',(req,res)=>{
    res.status(200).json{
        message: 'Hola Mundo'
    }
})

app.listen(port,()=>{
    console.log('Escuchando en localhost:3002');
})