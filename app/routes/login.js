const { response } = require('../../config/server');
var auth = require('./../../auth/authentication');
module.exports = function(app) {

const bodyParser = require('body-parser');
const { log } = require("console");

app.use(bodyParser.json());
    app.post('/login', (req, res, next) => {

        //esse teste abaixo deve ser feito no seu banco de dados
    auth.AuthUser(req).then(result=>{
        
        if(result)
        {
        return res.json({ auth: true, token: result });
     
            
        }
        else{
            res.status(401).end();
        }

       // result.forEach(item=>{
       //             console.log(item);
       //             userdata = item
       //         });
       })
        .catch(err=>{
            console.log(err)
        })
    })
    
}
    
    
    
   
  
    
