// on inclut ici toutes les routes qui nous seront utilisées. Ex : 
// require('./job');
// require('./blog')
// require('./todo')

const controllers= require('../controllers');

app.get('/', controllers.home);

/*app.get('/connexion', controllers.connexion);
app.get('/create', controllers.create);*/

require('./job');
require('./user');