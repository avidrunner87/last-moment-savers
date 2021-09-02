const { Users } = require("../models");
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '770425769909-1b53dbhequvdv35mnu4o28mjn7mo7jnr.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);

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

    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
      }
      verify()
      .then(()=>{
          req.user = user;
          next();
      })
      .catch(err=>{
          res.redirect('/login')
      })

}


module.exports = withAuth;
module.exports = checkAuthenticated;