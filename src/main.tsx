import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

createRoot(document.body).render(
  <>
    <App />
  </>,
)