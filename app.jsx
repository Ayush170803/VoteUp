import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from './components/Homepage/Homepage';
import ElectionNews from "./components/News/ElectionNews";
import Rules from "./components/Rules/Rules";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';
import Container from "./components/Container/Container";
import Signup from "./components/Signup/Signup";

let root = ReactDOM.createRoot(document.querySelector("#root"));

  const ContainerRouter=createBrowserRouter([
      {
        path:'/',
        element:<Container/>,
        errorElement:<Error/>,
        children:[
          {
            path:'/',
            element:<HomePage/>
          },
            {
              path:'/about',
              element:<About/>
            },
            {
              path:'/electionnews',
              element:<ElectionNews/>
            },
            {
              path:'/rules',
              element:<Rules/>
            },
            {
              path:'/signup',
              element:<Signup/>
            }
          ]
        }])

  root.render(<RouterProvider router={ContainerRouter}/>);