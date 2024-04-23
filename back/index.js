const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const cors=require('cors');

let server=express();


server.use(cors({
    origin:'*',
    methos:'HEAD, GET, POT, DELETE, POST, PATH',
}));


server.use (bodyParser.urlencoded({extend:false}))
server.use(bodyParser.json());


//base de datos 
const configdb={
    host:'localhost',
    user:'root',
    password:'',
    database:'',
};

const poolmysql=mysql.createPool(configdb);



server.get("/",(req,resp)=>{
    poolmysql.query(sql, function(err,result){
        if(err) throw resp.end("Base de datos fallando");
        res,poolmysql.json(result);
    });
});

server.post("/",(req,resp)=>{
    console.log(req);
    let codigo=req.body.codigo;
    let nombe=req.body.nombre;
    let npasaporte=req.body.npasaporte;
    let pais= req.body.pais;
    let direccion= req.body.direccion;
    let telefono= req.body.telefono;
    let correo= req.body.correo;
    let clave= req.body.clave;

    const sql='('${codigo}', '${nombre}','$


    });
