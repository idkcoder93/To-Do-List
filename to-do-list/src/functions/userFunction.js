class User {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    authenticator(username, password) {
        if (this.username == username && this.password == password) {
            return true;
        }
        else {
            return false && "Invalid username or password";
        }

    }

}