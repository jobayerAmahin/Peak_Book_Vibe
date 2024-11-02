import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import RootFile from './Components/RootFile/RootFile';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagetoRead from './Components/PagetoRead/PagetoRead';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Error from './Components/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootFile></RootFile>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'listed',
        element:<ListedBooks></ListedBooks>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
