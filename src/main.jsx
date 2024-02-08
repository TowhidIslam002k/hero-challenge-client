import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";

import AuthProviders from './ContextProviders/AuthProviders';
import "./index.css";
import routes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={routes} />
    </AuthProviders>
  </React.StrictMode>,
)
