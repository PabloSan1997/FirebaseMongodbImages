
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/main.scss"
import { Provedor } from './context/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provedor>
      <App />
    </Provedor>
)
