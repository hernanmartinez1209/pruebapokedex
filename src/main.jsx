import React from 'react'

import ReactDOM from 'react-dom/client'
//impotacion deredx
import { Provider } from 'react-redux'
//impoortacion de rouer
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
//
import store from'./components/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
    <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>
)
