import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthContext from './provider/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <section className='2xl:container mx-auto'>
        <RouterProvider router={router} />
      </section>
    </AuthContext>
  </React.StrictMode>,
)
