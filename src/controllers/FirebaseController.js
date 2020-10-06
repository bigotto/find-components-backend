const { join } = require('../database/connection');
const createUser = require('../utils/firebase/createUser');
const login = require('../utils/firebase/login');

module.exports = {
    async create(req, res) {
        const data = req.body;
        const user = await createUser(data);
        return res.status(201).send(user);
    },

    async load(req, res) {
        const data = req.body;
        const user = await login(data);
        return res.send(user);
    }
}