import React from 'react';
import ReactDOM from 'react-dom/client';
import dotenv from 'dotenv';
import { Provider } from 'react-redux';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Store, AnyAction } from 'redux';
import App from './App';
import { configureStoreAsync } from './app/store';
import reportWebVitals from './reportWebVitals';
import { myNewTheme } from './assets/styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

configureStoreAsync()
  .then((store) => {
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <ChakraProvider resetCSS theme={myNewTheme}>
            <App />
          </ChakraProvider>
        </Provider>
      </React.StrictMode>,
    );
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
