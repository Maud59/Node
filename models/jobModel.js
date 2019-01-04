// Fichier qui permet de formater la BDD

// Champ titre du job
//Typage de la donnée
// Nom du champ
// La donnée ne peut pas être nulle. 


    module.exports = sequelize.define('astonjob',{
        title: { 
            type : Sequelize.STRING, 
            field: 'title',
            allowNull: false, 
        },

        company: {
            type : Sequelize.STRING,
            field: 'company'
        },
        city: {
            type : Sequelize.STRING,
            field: 'city'
        },
        zipcode: {
            type : Sequelize.STRING,
            field: 'zipcode'
        },
        description: {
            type : Sequelize.STRING,
            field: 'description'
        },
        contratType: {
            type : Sequelize.STRING,
            field: 'contract_type'
        },
        startDate: {
            type : Sequelize.DATE,
            field: 'start_date'
        },
        publishedDate: {
            type : Sequelize.DATE,
            field: 'published_date'
        },
    })