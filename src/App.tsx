import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <Auth0Provider
      domain={'dev-xrmh37ogdbmx6wt0.us.auth0.com'}
      clientId={'uh9yGF5iuHu95hFbXv8mFapkLwzRaZPe'}>
      <MyComponent />
    </Auth0Provider>
  );
};

export default App;
