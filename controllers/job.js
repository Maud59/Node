// Le controller va faire appel au service job.js pour insérer dans la base de données par la suite. Mais ce n'est pas lui qui permet de mettre en base
// Les exports ."action" doivent avoir les mêmes noms que dans les routes
const JobService = require('../services/JobService')

/*/jobs/id: === req.params.id
/?token/abcd === req.query.token
/jobs === req.body.name (POST)
*/

exports.find = (req,res) =>{// find de la route
      JobService.findById(req.params.id)// findById est la fonction qui sera appelée dans services.  Le JobService est la const appelée plus haut 
            .then(
                  (data)=>{
                        res.status(200).json(data);// Un code d'erreur ou de validation quand la donnée est retrouvée en bdd
                  },
                  (err) =>{
                        console.log(err);
                  }
            )
            //il n'est pas possible de renvoyer plusieurs réponses, il ne doit pas y avoir d'autres éléments que le then()
}

exports.all = (req,res) =>{
      console.log(req.payload)
      JobService.findAll()
            .then(
                  (data)=>{
                        res.status(200).json(data);
                  },
                  (err) =>{
                        console.log(err);
                  }
      )
}

exports.create = (req,res) =>{
      JobService.create(req.body)
            .then(
                  (data)=>{
                        res.status(201).json(data);// Un code d'erreur ou de validation quand la donnée est bien mise en bdd
                  },
                  (err) =>{
                        console.log(err);
                  }
            );
}
exports.update = (req,res) =>{
      JobService.update(req.body)
            .then( 
                  (data)=>{
                        res.status(200).json();
                  },
                  (err) =>{
                        console.log(err);
                  }
            )

}
exports.delete = (req,res) =>{
      JobService.destroy(req.params.id) // fonction prédéfinie par Sequelize
            .then(
                  (data)=>{
                        res.status(200).json(data);
                  },
                  (err) =>{
                        console.log(err);
                  }
            )
}
