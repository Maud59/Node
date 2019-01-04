const UserService = require('../services/UserService')
const jwt = require('../modules/jwt')

exports.register = (req, res) => {
      UserService.register(req.body)
            .then(
                  user => {
                        res.status(201).json(user);
                  },
                  err => {
                        console.log(err);
                        res.status(500).json({ message: "Internal Server Error" });

                  }
            )

}

exports.authentication = (req, res) => {
      UserService.authenticate(req.body)
            .then(
                  user => {
                        jwt.generateToken(user,(err, token)=>{
                              res.cookie('token',token) // Insertion du jeton dans le cookie
                              res.json(user);
                        });
                        
                  },
                  err => {
                        //console.log(err);
                        res.status(401).json({ message: err.message });
                  }
            )
};

