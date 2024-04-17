import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import { CartContextProvider } from './contexts/CartContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import Signup from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/',
    element:<Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </UserProvider>
)
