const mysql = require("mysql2");
const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"farmacia",
    

});


connection.connect((error) =>{
    if(error){
        return console.error(error);
    
    } console.log ("Conectado a la base de datos");
});

module.exports = connection;

