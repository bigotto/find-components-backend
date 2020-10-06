const { listenerCount } = require("../database/connection");
const db = require('../database/connection');
const { search, getAll } = require("../database/search");

module.exports = {
    async components(req, res) {
        const { name } = req.query;

        if(name === '**all**'){
            const results = await getAll();
            return res.send(results);
        }
        const results = await search(name);
        return res.send(results);
    }
}
