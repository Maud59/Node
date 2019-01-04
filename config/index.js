/*app.get('env') === NODE_ENV*/
const fs = require('fs')
const path = require('path')
let config = null;


function loadFile(filename){
      if(!fs.existsSync(filename)){
            throw new Error (`"${filename}"does not exist`)
      }

      if(config === null){
            config= require(filename);
      }
      return config;
};

exports.load = ()=>{ // condition d'état de notre variable d'environnement (NODE_ENV)
      const env = app.get('env');
      /*if(env === 'production'){
            return loadFile('./prod.json')
      } else if (env === 'development'){
            return loadFile('./dev.json')*/
      return loadFile(path.join(__dirname,`${env}.json`));
      /* On récupère notre variable d'environnement si elle est également à X, il récupère le fichier X et récupère les données .json*/
};
