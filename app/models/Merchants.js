var Parameter = require ('../../repository/ParametersBuild/MerchantsData');
const { check, validationResult } = require('express-validator');


async function getMerchants (merchantIdList, salescode){


    var result = await Parameter.FindMerchants(merchantIdList, salescode);
    return result;
        
    
}

function IsValid(req, res, next){
    var List = req.body.Merchants
    
    if(!List)
    next();
    else if (!Array.isArray(List))
     return res.status(400).json({message: 'Invalid request [Merchants] ' });
    else
    next();
    
}

module.exports = {
    getMerchants: getMerchants,
    IsValid : IsValid
}



