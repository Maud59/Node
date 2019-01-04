/**
 * @see https://developer.mozilla.org/fr/docs/Web/HTTP/CORS
 */

module.exports =( req, res, next)=>{
      res.header('Access-Control-Allow-Origin','*'); // mettre le client angular avec le port 4200 ou notre nom de domaine
      res.header('Access-Control-Allow-Methods','POST, GET, PUT, DELETE');
      res.header('Access-Control-Allow-Headers','Content-type');
      next();     
}