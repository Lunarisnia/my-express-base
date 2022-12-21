'use strict';

const fetchAllUsers = require("../services/user/fetchAllUsers");

const getUsers = async (req, res) => {
    const users = await fetchAllUsers();
    return res.send({ users: users });
}

module.exports = { getUsers }