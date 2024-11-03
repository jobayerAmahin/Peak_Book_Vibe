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
import BookDetail from './Components/BookDetail/BookDetail';


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
        path:'book/:bookId',
        element:<BookDetail></BookDetail>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path:'listed',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('/booksData.json')
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
