var sql = require('mssql');
const { Console } = require('winston/lib/winston/transports');
var config = require('./../../config/database');

async function FindMerchants (merchantsId,salesmanId ) {
  
    const tp = new sql.Table();
    tp.columns.add('code',sql.VarChar(100));

    if(merchantsId){

        merchantsId.forEach(element => {
        // console.log('item no array'+ element);
        tp.rows.add(element); 
        
    });
    }

    let userdata=[];
    let pool = await sql.connect(config);
    let data = await pool.request()
                .input('SALESMANCOD', sql.Int, salesmanId)
                .input('TP', tp)
                .execute('SP_FD_MERCHANTS');
       // Store each record in an array
       for (let i=0;i<data.rowsAffected;i++){
        userdata.push(data.recordset[i]);
       }
 pool.close;
 sql.close;
return userdata;
}


  

module.exports = {
    FindMerchants
}
  