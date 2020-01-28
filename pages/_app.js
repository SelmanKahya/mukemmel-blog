//import '../styles.css';
import 'react-quill/dist/quill.snow.css';
import React from 'react'
import App from 'next/app'
import auth0 from '../services/auth0';

export default class MyApp extends App{
    static async getInitialProps({Component, router, ctx}){
        let pageProps = {};
        const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }
        const auth = {user, isAuthenticated: !!user};

        const res = await fetch("http://localhost:3000/api/posts");
        const json = await res.json();
        return { pageProps, posts: json.posts, auth }
    }

    render() {
        const {Component, pageProps, auth} = this.props

        return(

                <Component {...pageProps} auth={auth}  />

        )
    }
}
