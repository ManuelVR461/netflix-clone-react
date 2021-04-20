import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles'
import App from './App';
import { FirebaseContext } from './context/firebase'

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
}

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(

  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>

    </FirebaseContext.Provider>
    <GlobalStyles/>
      <App />
  </React.StrictMode>,

  document.getElementById('root')
);
