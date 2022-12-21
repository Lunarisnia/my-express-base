'use strict';
const { wrap } = require("../services/error/errorHandler");
const { getUsers } = require('../controllers/user.co');

module.exports = (router) => {
  router.get("/", wrap(getUsers));
}