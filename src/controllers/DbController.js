const { listenerCount } = require("../database/connection");
const db = require('../database/connection');

module.exports = {
    async components(req, res) {
        const { name } = req.query;

        const components = await db('components')
            .select('components.id', 'name', 'number', 'position')
            .join('gavetas', 'components.id', 'gavetas.component')
            .where('name', 'ilike', `%${name}%`);

        return res.send(components);
    }
}
