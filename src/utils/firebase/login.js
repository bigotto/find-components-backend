const firebase = require('./connection');

const login = async({email, password}) => {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
        return user.user;
    })
    .catch(error => {
        return error
    });

    return user;
}

module.exports = login;