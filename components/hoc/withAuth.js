import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer'
export default function (Component) {

    return class withAuth extends Component {

        static async getInitialProps(args){
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
            return { ...pageProps };
        }

        renderProtectedPage() {
            const { isAuthenticated } = this.props.auth;
            if (isAuthenticated) {
                return (
                    <Component {...this.props} />
                )
            }
            else {
                return (
                    <div>
                        <Header isAuthenticated={this.props.auth.isAuthenticated} />
                        <p>You are not authenticated. Please login to access this page</p>
                        <Footer />
                    </div>
                )
            }
        }
        render() {
            return this.renderProtectedPage()
        }
    }
}