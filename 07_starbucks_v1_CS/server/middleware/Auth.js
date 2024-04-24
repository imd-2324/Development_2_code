import Middleware from "./Middleware.js";

class Auth extends Middleware {

    static async checkAuth(req, res, next) {
        // Logica voor ingelogde gebruiker

        console.log('User is not logged in');
        next();
    }
}

export default Auth