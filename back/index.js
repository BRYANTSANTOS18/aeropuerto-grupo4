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
    database:'aeropuerto ',
};

const poolmysql=mysql.createPool(configdb);


server.ingreso("/", (req,rep)=>{
    console.log(req);
    let id=req.body.id;
    let nombre=req.body.nombre;
    const sql=`('${id}','${nombre}')`;
    poolmysql.query(sql, function(err,result){
        if(err) throw rep.status(201).send(201);
    });
    req.status(201).send(201);
});



server.delete("/",(req,rep)=>{
    let id=req.body.id;
    const sql=`delete from aeropuerto where id='${id}'`;
    poolmysql.query(sql,function(err,result){
        if(err) throw rep.status(201).send(201);
    });
    rep.status(201).send(201);
});


server.select("/",(req, rep)=>{
    const sql="select * from";
    poolmysql.query(sql, function(err,result){
        if(err) throw resp.end("Fallo en la base de datos");
        resp.json(result);
    });
});



