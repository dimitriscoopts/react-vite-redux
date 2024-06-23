import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Redux imports: We need to wrap the whole app with the <Provider /> component, passing as prop the "store"
import { Provider } from 'react-redux'
import { store } from "./state/store"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Redux Wrapper: Provider. Provides the "store" to the whole app */}
    < Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
