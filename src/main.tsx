import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  
  <Provider store={store}>
   <RouterProvider router={router}/>
   <ToastContainer />
  </Provider>
  
)
