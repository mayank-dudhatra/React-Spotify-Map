import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sidebar from './components/sidebar/sidebar.jsx'
import Mainbar from './components/maincontent/mainbar.jsx'
import Playbar from './components/playbar/playbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className='flex'>
    <Sidebar />
    <Mainbar />
    </div>
    <Playbar />
  </StrictMode>,
)
