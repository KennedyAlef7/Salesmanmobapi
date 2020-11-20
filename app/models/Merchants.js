var Parameter = require ('../../repository/ParametersBuild/MerchantsData');
const { check, validationResult } = require('express-validator');
const { json } = require('express');

class Merchant{

    constructor(name, document , id , created_at){
        this.merchantname = name;
        this.document = document;
        this.insidecode = id;
        this.register_date = created_at
    }
}


async function getMerchants (merchantIdList, salescode){


    var result = await Parameter.FindMerchants(merchantIdList, salescode);
    return ReturnToMerchant(result);
    
        
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

function ReturnToMerchant (result){
    var merchantarray = []; 
    if(Array.isArray(result)){

        result.forEach(element => {
            merchantarray.push(new Merchant (
                element.NAME,
                element.DOCUMENT,
                element.COD_MERCHANT,
                element.CREATED_AT

            ))
            console.log(element);
        });

        return merchantarray;
     }

}


module.exports = {
    getMerchants: getMerchants,
    IsValid : IsValid,
    Merchant: Merchant
}



