import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';

class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth(
            {
                domain: 'ahmetdadak.eu.auth0.com',
                clientID: 'j8cm0De3RGDVbmrILDAzBc0RqWs09OF1',
                redirectUri: 'http://localhost:3000/callback',
                responseType: 'token id_token',
                scope: 'openid profile'
            }
        );
        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.logout = this.logout.bind(this);
        // this.isAuthenticated = this.isAuthenticated.bind(this);
    }
    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                    console.log(err);
                }
            });
        })
    }

    setSession(authResult) {

        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        //localStorage.setItem('access_token', authResult.accessToken);

        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);
        //navigate to the home route
    }
    login() {
        this.auth0.authorize();
    }
    logout() {
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');

        this.auth0.logout({
            returnTo: '',
            clientID: 'j8cm0De3RGDVbmrILDAzBc0RqWs09OF1'
        });
    }

    // isAuthenticated() {
    //     const expiresAt = Cookies.getJSON('expiresAt');
    //     return new Date().getTime() < expiresAt;
    // }

    async getJWKS() {
        const res = await axios.get('https://ahmetdadak.eu.auth0.com/.well-known/jwks.json');
        const jwks = res.data;
        return jwks;
    }

    async verifyToken(token) {
        if(token){
            debugger;
            const decodedToken = jwt.decode(token, {complete: true});
            if(!decodedToken){
                return undefined;
            }
            const jwks = await this.getJWKS();
            const jwk = jwks.keys[0];

            let cert = jwk.x5c[0];
            cert = cert.match(/.{1,64}/g).join('\n');
            cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----`;

            if(jwk.kid === decodedToken.header.kid){
                try{
                    const verifiedToken  = jwt.verify(token, cert);
                    const expiresAt = verifiedToken.exp * 1000;
                    return (verifiedToken && new Date().getTime() < expiresAt)
                    ? verifiedToken : undefined;
                }catch(err){
                    return undefined;
                }
            }


        }
    }

    async clientAuth(){
        const token = Cookies.getJSON('jwt');
        const verifiedToken = await this.verifyToken(token);
        return verifiedToken;
    }

    async serverAuth(req){
        if (req.headers.cookie){
            const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
            if(!tokenCookie) {
                return undefined;
            }
            const token = tokenCookie.split('=')[1];
            const verifiedToken = await this.verifyToken(token);
            return verifiedToken;
        }
        return undefined;
    }
}

const auth0Client = new Auth();

export default auth0Client