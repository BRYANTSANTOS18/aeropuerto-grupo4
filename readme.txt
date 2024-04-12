Terea1 
front: diseño de Login,registro, eleminar, actualizar,mostrar datos  Admin

back: conexion a base de datos, api usuarios; landig Page, ingreso,login, eliminacion, edicion, select 

luis fuentes: normalizacion,basedatos, tabla usuarios, vitacora de usuarios, procedimentos de insercion de usuarios

/*nomeclatura de tabla usuarios*/
url: "/usuarios

id                  ->idus
nombre              ->nombre
npasaporte          ->npas
pais                ->pais
direccion           ->dir
telefono            ->tel
correo              ->cor
clave               ->cla

DBA: procedimenit para almencena ingresousuarios(id,nombre,pas,pis,tel,dir,cor,cla);


Front:  <input type=text id=idus >

BACK:
servidor.post("/usuarios",(req,rep)=>{
    let id=req.body.idus;
})