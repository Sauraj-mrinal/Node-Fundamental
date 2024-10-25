const mysql = require('mysql');

// creating a database 
const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: 'Mmhapu@800',
    database: 'userDB'

}
);

// chaek my connection is stablished or not 
db.connect((err) => {
    if(err){
        console.error('Mysql connection error'+err);
        process.exit(1);// stope server if connection fail 
    }
    console.log("Mysql connectd ok");
   
});
  
module.exports = db; // Export MySQL connection

    