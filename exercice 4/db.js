
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "127.0.0.1",
    database: ' mydb',
    user: 'root',
    password: '',
    port:'3306'
})
db.connect((error)=>{
    if(error)
        console.log(error);
    console.log('database connected');
})
module.exports= db;