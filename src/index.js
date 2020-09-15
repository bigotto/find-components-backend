const express = require('express');
const cors = require('cors');
const createUser = require('./utils/firebase/createUser');
const login = require('./utils/firebase/login');
const db = require('./database/connection');

const port = 3333;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/login', async (req, res) => {
    const data = req.body;
    
    const user = await login(data);
    return res.send(user);
})

app.post('/signup', async (req, res) => {
    const data = req.body;

    const user = await createUser(data);
    return res.status(201).send(user);
})

app.get('/db', async (req, res) => {
    const { name } = req.query;
    
    const components = await db('components')
        .select('components.id', 'name', 'number', 'position')
        .join('gavetas', 'components.id', 'gavetas.component')
        .where('name', 'ilike', `%${name}%`);

    return res.send(components);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})