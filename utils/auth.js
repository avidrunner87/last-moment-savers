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

function checkAuthenticated(req, res, next){

    let token = req.cookies['session-token'];

    let User = {Users};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience:'770425769909-1b53dbhequvdv35mnu4o28mjn7mo7jnr.apps.googleusercontent.com'
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
      }
      verify()
      .then(()=>{
          req.user = User;
          next();
      })
      .catch(err=>{
          res.redirect('/login')
      })

}


module.exports = withAuth;
module.exports = checkAuthenticated;