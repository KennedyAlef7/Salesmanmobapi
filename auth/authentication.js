require("dotenv-safe").config();
var Logindb = require('../repository/ParametersBuild/ParameterLogin');
const jwt = require('jsonwebtoken');

function GenerateToken (req){

    const id = 1;
    const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return token
}

async function AuthUser(req){
    console.log(req.body);
    let userdata=[];
    let token ;

    userdata = await Logindb.LoginSalesman(req.body.user, req.body.pwd);
    console.log(userdata);
    if (userdata.length > 0)
    {
        return GenerateToken(req);
    }
    else
    {
        return null;
    }
       

}

function verifyJWT(req, res, next){
    console.log(req.headers);
    const bearerheader = req.headers['authorization'];
    if(typeof(bearerheader) != undefined){
        const bearer = bearerheader.split(' ');
        const token = bearer[1];

    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) {
        console.log(err);
        return res.status(401).json({ auth: false, message: 'Invalid token.' });
    }
      // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
      next();
    });
    
    }
    else{
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    
}

module.exports= {
    AuthUser,
    verifyJWT
}