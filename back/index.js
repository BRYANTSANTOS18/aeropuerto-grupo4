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

    const sql='('${codigo}', '${nombre}','${npasaporte}','{$pais}','{$direccion}','{$telefono}','{$correo}','{$clave}')';
     poolmysql.query(sql, function(err, result ){
        if(err) throw reportError.status(201).send(201);
     });
     rep.status(201).send(201);

    });


    server.get("/",(req,resp)=>{
        poolmysql.query(sql, function(err,result){
            if(err) throw resp.end("Base de datos fallando");
            response.json(result);
        });
    });

    
    server.delete("/",(req,rep)=>{
        let id=req.body.codigo;
        const sql= ''$(codigo)'';
        pollmysql.query(sql, function(err, result){
            if(err) throw rep.result(201).send(201);
        });
        rep.status(201).send(201);
    });

