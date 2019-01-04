const UserModel = require('../models/UserModel');
const bcryptPassword = require('../modules/bcrypt-password');

function create(data){
      return UserModel.create({
            name: data.name,
            email: data.email,
            password: data.password,
            active: true
      })
};


//Fonction qui permet de s'inscrire
// On prend les données de l'utilisateur, puis on en transforme le mdp avec hash et enfin on renvoie les data avec le mdp crypté
exports.register = data =>{
      return bcryptPassword.hash(data.password).then(
            hash => { 
                  data.password = hash;
                  return create(data)
            }
      );

};

//fonction qui permet de vérifier si le login est dans la bdd
function findByEmail(email){

      return UserModel.findOne({
            where: {email: email},
      });
}

      //return verify(data,data.email)



//Fonction qui permet de se connecter
exports.authenticate = data =>{
       return findByEmail(data.email).then( //on récupère l'utilisateur
            user =>{ 
                  if(!user){
                        throw new Error('user not found')
                  }
                  return bcryptPassword.verify(data.password, user.password).then(
                        isOk =>{ // vérifie si le mdp donné et celui de la base sont idem (mdp hashés)
                              if(!isOk){
                                    throw new Error ('password is invalid');
                              }
                              return user;
                        }
                  )
            },      
      )
};

exports.create = create;
exports.findByEmail = findByEmail;

