const jwt = require('jsonwebtoken')

const JWT_SECRET_KEY = 'j8uol3Mr-IZutBC7J63ihD4@h25kghR1Ze';

// la fonction va permettre de générer le jeton de sécurité à partir des données de l'utilisateur
// return en mode synchrone (rappel : callback avec la function donc asynchrone)
// On crée la clef à la main, /!\ à ne pa sperdre cette clef
// On remplace le certificat par la const de la clef
//import de notre module dans le controllers/user
//On va déporter notre callback vers le controllers et la créer dans notre fonction
exports.generateToken = (user, callback) =>{
      jwt.sign(
            { 
                  id: user.id,
                  username: user.name
            }, 
            JWT_SECRET_KEY, 
            { 
                  algorithm: 'HS256',
                  expiresIn: 60
            }, 
            callback
      );
}

exports.checkToken = (token,callback) => {
      jwt.verify(
            token,
            JWT_SECRET_KEY, //Const de la clef
            callback
      )
};