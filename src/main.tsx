import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import "./main.module.css"

createRoot(document.getElementById('root')!).render(
    <App />
)
