import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer'
const namespace = process.env.NAMESPACE;
export default role => Component =>

    class withAuth extends Component {

        static async getInitialProps(args) {
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
            return { ...pageProps };
        }

        renderProtectedPage() {
            const { isAuthenticated, user } = this.props.auth;
            const userRole = user && user[`${namespace}role`];
            let isAuthorized = false;

            if (role) {
                if (userRole && userRole === role) { isAuthorized = true };
            }
            else {
                isAuthorized = true;
            }

            if (!isAuthenticated) {
                return (
                    <div>
                        <Header isAuthenticated={this.props.auth.isAuthenticated} />
                        <p>You are not authenticated. Please login to access this page</p>
                        <Footer />
                    </div>
                )
            }
            else if (!isAuthorized) {
                return (
                    <div>
                        <Header isAuthenticated={this.props.auth.isAuthenticated} />
                        <p>You are not authorized. You do not have to permission to access this page.</p>
                        <Footer />
                    </div>
                )
            }
            else {
                return (
                    <Component {...this.props} />
                )
            }

        }
        render() {
            return this.renderProtectedPage()
        }
    }

