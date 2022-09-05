
import express from "express"
import {crud_estudiante} from "./controlador/crud_estudiante.js";




const app_e = express();
app_e.use(express.urlencoded({extended:false}));
app_e.use(express.json());

app_e.use(express.static('./vistas'))
app_e.use(express.static('./controlador'))
app_e.use(express.static('./modelo'))

app_e.set('views','./vistas')
app_e.set('view engine','ejs')

app_e.listen('5000', function(){
    console.log('La Aplicacion iniciada en http://localhost:5000/' )
})
app_e.post('/crud_e',crud_estudiante.cud);

app_e.get('/',crud_estudiante.leer);


