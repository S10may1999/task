const sql=require("mysql2");

const config={
    host:"localhost",
    user:"root",
    password:"root",
    databaseName:"nimap-db"
}

const dbConnection=sql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
})

dbConnection.query(`create database if not exists \`${config.databaseName}\`;`,(error,result)=>{
    if(error){
        console.log(error.toString());
        process.exit(1);
    }
    console.log(`database ${config.databaseName} is ready to use !!`);
    
})
const connectionPool=sql.createPool({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.databaseName,
})

module.exports=connectionPool.promise();