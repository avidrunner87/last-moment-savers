function withAuth2(req, res, next){    
    const { logged_in} = req.session;

    console.log('WITH AUTH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log("REQUEST SESSION AUTH", req.session);
    console.log("REQUEST LOGIN AUTH", req.session.logged_in);

    // Not Logged In
    if (!logged_in){
        return res.redirect('/login');
    }
    // Logged In
    //console.log(req.session);
    next();
}

module.exports = withAuth2;


