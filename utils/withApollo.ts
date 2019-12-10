import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import config from '../config'
export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: config.apiUrl,
      cache: new InMemoryCache().restore(initialState || {})
    })
);