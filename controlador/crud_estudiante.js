import express from "express"
import {conectar} from "../modelo/db_conectar.js";

var crud_estudiante =({})
crud_estudiante.leer = (req,res) =>{
    conectar.query('SELECT id_estudiante,carne,nombre,apellidos,direccion,correo_electronico,id_tipo_sangre,date_format(fecha_nacimiento, "%D-%M-%Y") as fecha_nacimiento FROM estudiantes;',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('estudiantes/index',{resultado:results})
             }
          })
}; 

crud_estudiante.cud = (req,res) => {
    const btn_crear = req.body.btn_crear;
    const btn_modificar = req.body.btn_modificar;
    const btn_eliminar = req.body.btn_eliminar;
    const id_estudiante =req.body.txt_id;
    const carne = req.body.txt_carne;
    const nombre = req.body.txt_nombre;
    const apellidos = req.body.txt_apellido;
    const direccion = req.body.txt_direccion;
    const correo_electronico = req.body.txt_correo_electronico;
    const id_tipo_sangre = req.body.txt_id_tipo_sangre;
    const fecha_nacimiento = req.body.txt_fecha;

    if(btn_crear){
        conectar.query('insert into estudiantes set ? ',{carne:carne,nombre:nombre,apellidos:apellidos,direccion:direccion,correo_electronico:correo_electronico,id_tipo_sangre:id_tipo_sangre,fecha_nacimiento:fecha_nacimiento},(error,results)=>{
            if(error){
                console.log(error);
            }else{
                res.rendirect('/');
            }
        });
    }
    if(btn_modificar){

        conectar.query('update estudiantes set ? where id_estudiante = ? ',[{carne:carne,nombre:nombre,apellidos:apellidos,direccion:direccion,correo_electronico:correo_electronico,id_tipo_sangre:id_tipo_sangre,fecha_nacimiento:fecha_nacimiento},id_estudiante],(error,results)=>{
            if(error){
                console.log(error);
            }else{
                res.rendirect('/');
            }
        });

    }
    if(btn_eliminar){

        conectar.query('delete from estudiantes where id_estudiante = ? ',[id_estudiante],(error,results)=>{
            if(error){
                console.log(error);
            }else{
                res.rendirect('/');
            }
        });

    }
};
export{crud_estudiante}