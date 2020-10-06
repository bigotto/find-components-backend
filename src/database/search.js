const db = require('../database/connection');

const search = async (name) => {
    const components = await db('components')
        .select('components.id', 'name', 'number', 'position')
        .join('gavetas', 'components.id', 'gavetas.component')
        .where('name', 'ilike', `%${name}%`);
    
    return components;
};

const getAll = async () => {
    const components = await db('components')
        .select('components.id', 'name', 'number', 'position')
        .join('gavetas', 'components.id', 'gavetas.component')

    return components;
};

module.exports = { search, getAll };