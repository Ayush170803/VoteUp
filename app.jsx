import React from "react";
import ReactDOM from "react-dom";
import HomePage from './components/Homepage/Homepage';
import ElectionNews from "./components/News/ElectionNews";
import Rules from "./components/Rules/Rules";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';

let root = ReactDOM.createRoot(document.querySelector("#root"));

const Container = () => {
    return (
      <div id="container">
        <HomePage/>
      </div>
    );
  };

  const ContainerRouter=createBrowserRouter([
      {
        path:'/',
        element:<Container/>,
        errorElement:<Error/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/news',
        element:<ElectionNews/>
      },
      {
        path:'/rules',
        element:<Rules/>
      }
    ]
  )

  root.render(<RouterProvider router={ContainerRouter}/>);