import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Authentication/Login/Login';
import Logout from './Authentication/Logout/Logout';
import PrivateRoute from './Authentication/PrivateRoute/PrivateRoute';
import Register from './Authentication/Register/Register';
import AuthProviders from './ContextProviders/AuthProviders';
import "./index.css";
// import Details from './LAYOUT/Details';
import Main from './LAYOUT/Main.jsx';
import AboutPage from './PAGES/AboutPage/AboutPage';
import Bookmark from './PAGES/BookMarks/BookMark';
import CarouselCardDetails from './PAGES/CardDetails/CarouselCardDetails/CarouselCardDetails';
import CartedMeals from './PAGES/CartedMeals/CartedMeals';
import CategoryMeals from './PAGES/CategoryMeals/CategoryMeals';
import ContactPage from './PAGES/ContactPage/ContactPage';
import ErrorPage from './PAGES/ErrorPage/ErrorPage';
import Home from './PAGES/Home/Home/Home';
import PostData from './PAGES/PostData/PostData';
import UserProfile from './PAGES/UserProfile/UserProfile';
import PublicPost from './PublicPost/PublicPost';

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
        element: <PrivateRoute><CarouselCardDetails /></PrivateRoute>,
        loader: async ({ params }) => {
          const result1 = await fetch(`http://localhost:5000/meals/${params.id}`);
          const carouselData = await result1.json();

          const result2 = await fetch('http://localhost:5000/feature');
          const featureData = await result2.json();

          return {
            carouselData,
            featureData
          }
        }
      },
      {
        path: "/feature/:id",
        element: <PrivateRoute><CarouselCardDetails /></PrivateRoute>,
        loader: async ({ params }) => {
          const result1 = await fetch(`http://localhost:5000/feature/${params.id}`);
          const carouselData = await result1.json();

          const result2 = await fetch('http://localhost:5000/feature');
          const featureData = await result2.json();

          return {
            carouselData,
            featureData
          }
        }
      },
      {
        path: "/populer/:id",
        element: <PrivateRoute><CarouselCardDetails /></PrivateRoute>,
        loader: async ({ params }) => {
          const result1 = await fetch(`http://localhost:5000/populer/${params.id}`);
          const carouselData = await result1.json();

          const result2 = await fetch('http://localhost:5000/feature');
          const featureData = await result2.json();
          return {
            carouselData,
            featureData
          }
        }
      },
      {
        path: "/category_meal/:id",
        element: <CategoryMeals />,
        loader: ({ params }) => fetch(`http://localhost:5000/categoryMeals/${params.id}`)
      },
      {
        path: "/single_category_meal/:id",
        element: <PrivateRoute><CarouselCardDetails /></PrivateRoute>,
        loader: async ({ params }) => {
          const result1 = await fetch(`http://localhost:5000/singleCategoryMeals/${params.id}`);
          const carouselData = await result1.json();

          const result2 = await fetch('http://localhost:5000/feature');
          const featureData = await result2.json();
          return {
            carouselData,
            featureData
          }
        }
      },
      {
        path: "/profile",
        element:<PrivateRoute><UserProfile /></PrivateRoute>
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: "/post",
        element: <PostData />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/bookmark",
        element: <Bookmark />
      },
      {
        path: "/cart",
        element: <CartedMeals />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/public",
        element: <PublicPost />,
        loader: () => fetch('http://localhost:5000/public')
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
