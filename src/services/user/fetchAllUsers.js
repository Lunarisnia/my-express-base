'use strict';
const { User } = require('../../db/models');
module.exports = async () => {
    return User.findAll();
}