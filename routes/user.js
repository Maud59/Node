const controllers = require('../controllers/user');


app.post('/register', controllers.register);
app.post('/authentication', controllers.authentication);