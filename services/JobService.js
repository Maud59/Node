const Job = require('../models/jobModel');
// Les exports ."action" doivent avoir les mêmes noms que dans le controllers. 
//Le service fait appel au model

//création de la table
exports.create = data =>{
      return Job.create({
            title: data.title,
            company: data.company,
            city: data.city,
            zipcode : data.zipcode,
            description : data.description,
            contratType : data.contratType,
            startDate : new Date(data.startDate),
            publishedDate : new Date(),
      })
}


exports.findById = data =>{// fonction qui est appelée dans le controllers
      return Job.findById(data) // Le Job. fait référence à la const appelée plus haut.
};

exports.findAll = () =>{
      return Job.findAll()

};

exports.destroy = id =>{
      return Job.destroy({
            where: {id:id}
      })
};

exports.update = data =>{
      return Job.update({
            id: data.id,
            title: data.title,
            company: data.company,
            city: data.city,
            zipcode: data.zipcode,
            description: data.description,
            contratType: data.contratType,
            startDate: new Date(data.startDate),
            publishedDate: new Date(data.publishedDate),
      },
      {
            where: {id:data.id}
      })
};
// exports.create = data =>{
//       return Job.create({
//             title:"Dev FS",
//             company: "IBM",
//             city: "Lille",
//             zipcode : "59000",
//             description : "Nous recherchons un développeur fullstack",
//             contratType : 'CDI',
//             startDate : new Date('12/01/2019'),
//             publishedDate : new Date('12/12/2018'),
//       })
// }