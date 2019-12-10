import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../utils/withApollo';
import {  } from 'next-with-apollo';


class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);