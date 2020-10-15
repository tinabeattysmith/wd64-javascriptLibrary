const Sequelize = require("sequelize");
                                                       
const applicationSequelizeObject = new Sequelize(
    'todo-db', //name db
    'postgres', //admin (owner) user of db
        'Letmein1234!', //password to log into the db admin account
        {                                                                            
        host: 'localhost', //where to find the database
        dialect: 'postgres'
        }
    );

module.exports = applicationSequelizeObject;
