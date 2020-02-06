const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const namespace = 'http://localhost:3000/'
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://ahmetdadak.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'j8cm0De3RGDVbmrILDAzBc0RqWs09OF1',
    issuer: 'https://ahmetdadak.eu.auth0.com/',
    algorithms: ['RS256']
});

exports.checkRole = role => (req, res, next) => {
    const user = req.user;

    if(user && (user[namespace + 'role'] === role)) {
        next();
    }
    else {
        return res.status(401).send({title: 'Not Authorized', details: 'You are not authorized to access'});
    }
}