import auth0 from 'auth0-js';

class Auth {

    constructor(){
        this.auth0 = new auth0.WebAuth(
            {
                domain: 'ahmetdadak.eu.auth0.com',
                clientID: 'j8cm0De3RGDVbmrILDAzBc0RqWs09OF1',
                redirectUri: 'http://localhost:3000/callback',
                responseType: 'token id_token',
                scope: 'openid profile',
            }
        );
        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.setSession = this.setSession.bind(this);
    }
    handleAuthentication(){
        return new Promise((resolve, reject)=> {
            this.auth0.parseHash((err, authResult) => {
                if(authResult && authResult.accessToken && authResult.idToken){
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                    console.log(err);
                }
            });
        })
    }

    setSession(){

    }
    login() {
        this.auth0.authorize();
    }
}

const auth0Client = new Auth();

export default auth0Client