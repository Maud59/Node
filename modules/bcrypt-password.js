//sécurisation des mots de passe

const bcrypt = require('bcrypt')

// La fonction va récupérer le mot de passe pour le hasher. La valeur 10, permet de hasher notre mdp 10 fois et de le sécuriser d'avantage. /!\ la valeur 10 va avoir un coût temporel
exports.hash = plainTextPassword =>{
      return bcrypt.hash(plainTextPassword, 10);

};

//Fonction de comparaison avec le mdp hashé dans notre bdd (renvoie une promesse)
//La fonction va prendre deux paramètres en compte : le plainTextPassword et le hash
exports.verify = (plainTextPassword, hash)=>{
      return bcrypt.compare(plainTextPassword, hash)
};