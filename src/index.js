import React from 'react'
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles'
import App from './App';
import { FirebaseContext } from './context/firebase'

require("dotenv").config();

const config = {
  apiKey: process.env.REACT_APP_APIKEY ,
  authDomain: process.env.REACT_APP_AUTHDOMAIN ,
  projectId: process.env.REACT_APP_PROJECTID ,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET ,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID ,
  appId: process.env.REACT_APP_APPID,
}

export const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <GlobalStyles/>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
