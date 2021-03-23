/* eslint-disable prettier/prettier */
/**
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import { ThemeProvider } from 'styled-components';
 import { Provider } from 'react-redux';
 import { 
   createStore, 
   applyMiddleware 
 } from 'redux';
 import createSagaMiddleware from 'redux-saga';
 
 import inputReducer from './src/store/reducer/inputReducer';
 import sagas  from './src/store/sagas';
 import { Search } from './src/components/Search';
 
 const sagaMiddleware = createSagaMiddleware();
 const store = createStore(
  inputReducer,
   applyMiddleware(sagaMiddleware)
 );
 sagaMiddleware.run(sagas); 
 
 const App: () => React$Node = () => {
   return (
    <Provider store={store}>
       <Search />
    </Provider>
   )             
 };
 export default App;
 