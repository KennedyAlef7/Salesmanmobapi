const { response } = require('../../config/server');
var auth = require('./../../auth/authentication');
var MerchantModel = require('../models/Merchants');



module.exports =  function(app) {

    const bodyParser = require('body-parser');
    const { log } = require("console");
    // let merchantdata=[];
    
    app.use(bodyParser.json());
        app.get('/merchants', auth.verifyJWT, MerchantModel.IsValid, (req, res, next) => {
            
            MerchantModel.getMerchants(req.body.Merchants, 1).then(result=>{
                return res.json({merchants: result});
    
                });
               
        })}

     