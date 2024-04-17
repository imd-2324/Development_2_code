class Middleware{

    static async logUser(req, res, next){
        if(req.session && req.session.user){
            console.log(req.session.user);
        }else{
            console.log('No user');
        }
        next();
    }
}

export default Middleware