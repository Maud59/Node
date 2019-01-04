// fonction qui sera appelée à chaque fois qu'on a besoin de la home.

exports.home = (req,res)=>{ // appelle le nom de la route
      res.render('index',{title: 'Home Page'}); // Appelle le fichier index.pug
}
/*
exports.connexion = (req,res)=>{
      res.render('connexion',{title: 'Connexion'});
}

exports.create = (req,res)=>{
      res.render('creationCompte',{title: 'Inscription'});
}*/


