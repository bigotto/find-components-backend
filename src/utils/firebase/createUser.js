const firebase = require('./connection');

const createUser = async ({name, photo, email, password}) => {
    // Create user
    const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password)

    // Update user
    if(!user.code){
        await user.updateProfile({
            displayName: name,
            photoURL: photo
        }).catch(error => {
            return error
        })
    }
    
    return user;
};

module.exports = createUser 
