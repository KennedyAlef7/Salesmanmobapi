const { response } = require('../../config/server');
var auth = require('./../../auth/authentication');
var ParameterBd = require('../../repository/ParametersBuild/Parameters');


module.exports = function(app) {

    const bodyParser = require('body-parser');
    const { log } = require("console");
    // let merchantdata=[];
    
    app.use(bodyParser.json());
        app.get('/rankingmerchants', auth.verifyJWT, (req, res, next) => {
            ParameterBd.RankingMerchants (req.userId).then(result=>{
            return res.json({ result });

            });



        })}