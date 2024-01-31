// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
// import { persistor, store } from "./Components/Stores/Store.jsx";
import { store , persistor} from './components/Stores/Store.jsx';
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode  >
    
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>
)
