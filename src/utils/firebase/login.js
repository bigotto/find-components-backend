const firebase = require('./connection');

const login = async({email, password}) => {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
}

module.exports = login;