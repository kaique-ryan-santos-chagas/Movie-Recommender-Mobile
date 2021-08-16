import React from 'react';

import Routes from './src/pages/routes/appRoutes';

import { Provider } from 'react-redux';

import store from './src/pages/store/movieStore';

export default function App() {
  
  return (
    <Provider store={store}>
       <Routes />
    </Provider>
  );
}


