import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import Details from './LAYOUT/Details';
import Main from './LAYOUT/Main.jsx';
import CarouselCardDetails from './PAGES/CardDetails/CarouselCardDetails/CarouselCardDetails';
import Home from './PAGES/Home/Home/Home';
import PostData from './PAGES/PostData/PostData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
          path: "/carousel/:id",
          element: <CarouselCardDetails />,
          loader: async({params}) => {
            const result1 = await fetch(`http://localhost:5000/meals/${params.id}`);
            const carouselData = await result1.json();

            const result2 = await fetch('http://localhost:5000/feature');
            const featureData = await result2.json();
            return{
              carouselData,
              featureData
            }
          }
      },
      {
        path: "/feature/:id",
        element: <CarouselCardDetails />,
        loader: async({params}) => {
          const result1 = await fetch(`http://localhost:5000/feature/${params.id}`);
          const carouselData = await result1.json();

          const result2 = await fetch('http://localhost:5000/feature');
          const featureData = await result2.json();
          return{
            carouselData,
            featureData
          }
        }
      },
      {
        path: "/post",
        element: <PostData />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
