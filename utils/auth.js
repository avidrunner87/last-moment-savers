function withAuth(req, res, next){
    console.log('with auth')
    const { logged_in} = req.session;
    // Not Logged In
    if (!logged_in){
        return res.redirect('/login');
    }
    // Logged In
    console.log(req.session);
    next();
}

module.exports = withAuth;