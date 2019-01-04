// Appel de nos bibliothèques
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path'); 
const basicAuth = require('express-basic-auth');
const cookieParser = require('cookie-parser')
const jwtCheck = require('./middlewares/jwt-check')
const bcryptPassword = require('./modules/bcrypt-password')
const config = require('./config');// répertoire config, avec le fichier index
const password = require('./middlewares/authToken');
const cors = require('./middlewares/cors')


//Permet de créer notre app pour écouter notre serveur
app = express();
api= express.Router(); // cette ligne va nous permettre de faire des get et post sur une autre partie de notre api qui sera automatiquement redirigée grâce à ce chemin.
app.use('/api',api); //Toutes les routes qui passent par api, auront un chemin commencant par /api
/* par exemple api.get('/jobs') on aura un chemin : '/api/jobs*/


conf = config.load(); // /!\ ordre avec la déclaration express. Le app est global

//connexion à la BDD
Sequelize = require('sequelize');
sequelize = new Sequelize(conf.db.default.url,{// appel de l'url dans la configuration
      logging: false, //valeur à mettre en dev, à chaque connexion à la db, les log sont activés
      operatorsAliases: false // permet de retirer deprecated
});

sequelize.sync({force: false}) // Forcage de création de table
      .then(() =>{
            console.log('Database & tables créées')
      })

//authentification - Attention, non sécurisée. Utiliser https.
/*app.use(basicAuth({
      users: { 'admin': 'secret' },

      //Requête qui peut permettre la vérification de l'identification. La fonction va aller chercher les éléments de la requête et vérifier. Dans ce cas, le users ci dessus n'est plus nécessaire.
      /*authorizer: (user,password,authorize) =>{
            db.query('SELECT * FROM user WHERE username"' + user + 'AND pass=' + pass);
      
      challenge: true // pour ouvrir la fenêtre d'authentification
  }))*/
//middlewares

/*
/jobs/id: === req.params.id
/?token/abcd === req.query.token
/jobs === req.body.name (POST)
*/

//app.use(password('coucou'));

app.use(morgan('tiny')); // Mode d'affichage du code combined ou tiny
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser())

api.use(cors);
api.use(cookieParser())
//api.use(jwtCheck); // Nous appelons dans l'api car c'est l'api que l'on souhaite sécuriser
api.use(bodyParser.urlencoded({extended : true}));
api.use(bodyParser.json());

// app.get('/',(req,res)=>{
//       res.send('Hello World')
// })


//Configuration de pug pour le template de notre page
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));
app.locals.pretty = false;

// Chargement de routes
// Require ('./routes/index) - Permet d'appeler nos routes qui seront utilisées pour notre API
require(path.join(__dirname,'routes'))


//Démarrage serveur
/*app.listen(3000,()=>{
      console.log('Server is running ...');
});*/
app.listen(conf.server.port,()=>{
      console.log('Server is running ...');
})
