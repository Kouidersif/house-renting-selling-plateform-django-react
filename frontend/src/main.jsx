import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {ContextAppProvider} from "../context/useAppContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextAppProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ContextAppProvider>
)
