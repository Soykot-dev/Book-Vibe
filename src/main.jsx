import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayouts from './Layouts/MainLayouts'
import Home from './Pages/Home/Home'
import ListedBook from './Pages/ListedBook/ListedBook'
import PagesToRead from './Pages/PagesToRead/PagesToRead'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/listed-book',
        element: <ListedBook />
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
