const jwt = require('../modules/jwt');

// verification si le cookie est bien réceptionné à chaque requête
// on appelle le middleware dans le fichier index.js
module.exports = (req,res,next)=>{

       jwt.checkToken(req.cookies.token,(err,decoded)=>{
            if(err){
                   res.status(401).json({message: err.message})
             } else {
                  if(!req.payload){
                  req.payload = decoded;
                  next();
                  }
             }
       });
};