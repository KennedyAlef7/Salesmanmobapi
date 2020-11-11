var sql = require('mssql');
var config = require('./../../config/database');

async function RankingMerchants (salesmanId) {
  
    let userdata=[];
    let pool = await sql.connect(config);
    let data = await pool.request()
        .input('SALESMANCOD', sql.Int, salesmanId)
        .execute('SP_FD_RANKING_MERCHANTS');
       // Store each record in an array
       for (let i=0;i<data.rowsAffected;i++){
        userdata.push(data.recordset[i]);
       }
 pool.close;
 sql.close;
return userdata;
}

  

module.exports = {
    RankingMerchants
}
  