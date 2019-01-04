/* La bdd sera créée sous la forme : 
id
name string
email string
password (bcrypt)
active boolean
create-at*/

module.exports = sequelize.define('userapi',{
      name:{
            type: Sequelize.STRING,
            field: 'name',
            allowNull: false
      },
      email:{
            type: Sequelize.STRING,
            field: 'email',
            allowNull: false,
            unique: true,
      },
      password:{
            type: Sequelize.STRING,
            field: 'password',
            allowNull: false,
      },
      active:{
            type: Sequelize.BOOLEAN,
            field: 'active',
            allowNull: false,
      },

});
