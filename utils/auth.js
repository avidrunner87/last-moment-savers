const { Users } = require("../models");

function withAuth(req, res, next) {
    console.log(
        'WITH AUTH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
    );
    console.log(req.session);

    const { logged_in } = req.session;
    // Not Logged In
    if (!logged_in) {
        console.log(
            'REDIRECTING TO LOGIN #########################################'
        );
        return res.redirect('/login');
    }
    // Logged In

    next();
}

module.exports = withAuth;