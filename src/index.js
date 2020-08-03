const express = require('express');
const createUser = require('./utils/firebase/createUser');
const login = require('./utils/firebase/login');

const port = 3000;
const app = express();
app.use(express.json())

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

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})