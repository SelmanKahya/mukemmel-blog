import React from 'react'
import App from 'next/app'
import auth0 from '../services/auth0';
import '../styles/slate-editor.scss';
import { ToastContainer } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';
import { Container } from 'reactstrap';
export default class MyApp extends App{
    static async getInitialProps({Component, router, ctx}){
        let pageProps = {};
        const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }
        const auth = {user, isAuthenticated: !!user};

        // const res = await fetch("http://localhost:3000/api/posts");
        // const json = await res.json();
        return { pageProps, auth }
    }

    render() {
        const {Component, pageProps, auth} = this.props

        return(
            <div>
                <ToastContainer/>
                <Component {...pageProps} auth={auth}  />
            </div>
        )
    }
}
