import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://gapi.storyblok.com/v1/api',
  request: operation => {
    operation.setContext({
      headers: {
        token: process.env.REACT_APP_APOLLO_CLIENT_TOKEN,
        version: 'draft'
      }
    });
  }
});

export default client