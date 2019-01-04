
module.exports = (password) => {
      return(req,res,next) => { // app utilise le middleware, le middleware n'a pas de nom, il est implicite de par sa syntaxe (il est utilisé lors de la requête)
            const token = req.query.token;

            if(token !== password){
                  res.json({error:'hého, une erreur'});
            } else {
                  next();
            }
      }
}