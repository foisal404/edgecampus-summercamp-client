import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthContext from './provider/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <section className='2xl:container mx-auto'>
          <RouterProvider router={router} />
        </section>
      </AuthContext>
    </QueryClientProvider>

    
  </React.StrictMode>,
)
