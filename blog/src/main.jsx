import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogProvider from './hooks/BlogContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <BlogProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </BlogProvider>
)
