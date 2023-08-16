'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// model
db.Student = require('./Student')(sequelize)
db.Classes = require('./Classes')(sequelize)
db.StudentProfile = require('./StudentProfile')(sequelize)

// create relationship
// 1:1 student and profile
db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

// 1: multi student and classes
db.Student.hasMany(db.Classes, {foreignKey:'student_id'});
db.Classes.hasMany(db.Student, {foreignKey:'student_id'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
