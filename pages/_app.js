import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../utils/withApollo';
import { Provider } from 'mobx-react';
import initializeStore from '../stores/stores';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class MyApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }
  
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Provider {...this.mobxStore}>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
          <ToastContainer/>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default withApollo(MyApp);