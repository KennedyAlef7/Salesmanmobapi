var sql = require('mssql');
var config = require('./../../config/database');

async function LoginSalesman (user, pwd) {
  
    let userdata=[];
    let pool = await sql.connect(config);
    let data = await pool.request()
        .input('user', sql.VarChar(100), user)
        .input('pwd', sql.VarChar(500), pwd)
        .execute('SP_LOGIN_SALESMAN');
       // Store each record in an array
       for (let i=0;i<data.rowsAffected;i++){
        userdata.push(data.recordset[i]);
       }
 pool.close;
 sql.close;
return userdata;
}

  

module.exports = {
     LoginSalesman
}
  