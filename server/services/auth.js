const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 50,
        jwksUri: 'https://ahmetdadak.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'j8cm0De3RGDVbmrILDAzBc0RqWs09OF1',
    issuer: 'https://ahmetdadak.eu.auth0.com/',
    algorithms: ['RS256']
});

exports.checkRole = role => (req, res, next) => {
    const user = req.user;

    if(user && (user[process.env.NAMESPACE + '/role'] === role)) {
        next();
    }
    else {
        return res.status(401).send({title: 'Not Authorized', details: 'You are not authorized to access'});
    }
}