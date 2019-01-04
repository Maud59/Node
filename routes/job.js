

const controllers= require('../controllers/job')


//http://localhost:3000/api/jobs
api.post('/jobs',controllers.create);

//http://localhost:3000/api/jobs
api.get('/jobs',controllers.all);

//http://localhost:3000/api/jobs/id
api.delete('/jobs/:id',controllers.delete); // le fait de passer une id peut être gênante pour une appli mobile, car elle est plus gourmande. 

//http://localhost:3000/api/jobs
api.put('/jobs',controllers.update);

//http://localhost:3000/api/jobs/:id
api.get('/jobs/:id',controllers.find);