import mysql from 'mysql'

var conectar = mysql.createConnection({
    host     : 'localhost',
    user     : 'usr_estudiante',
    password : 'Estudiante@4560',
    database : 'db_estudiante'
});

conectar.connect(function(err) {
    if (err) {
        console.error('Error en la conexion: ' + err.stack);
    return;
  }

      console.log('conexion exitosa ID: ' + conectar.threadId);
});

export {conectar}