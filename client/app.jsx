import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Assuming you use this for ContainerRouter
import { Routes, Route } from "react-router"; // Correct import for Routes and Route
import HomePage from './components/Homepage/Homepage';
import ElectionNews from "./components/News/ElectionNews";
import Rules from "./components/Rules/Rules";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Container from "./components/Container/Container";
import SignupForm from "./components/Signup/Signup"; // Make sure SignupForm is correctly imported
import LoginForm from './components/Signup/LoginForm';
import ForgotPasswordForm from './components/Signup/ForgotPasswordForm';
import ResetPassword from './components/Signup/ResetPassword';
import BackgroundVideo from './components/Signup/BackgroundVideo';
import ErrorBoundary from './components/Signup/ErrorBoundary';
import './App.css';

// Assuming ContainerRouter is correctly defined using react-router-dom
const ContainerRouter = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <About /> },
      { path: '/electionnews', element: <ElectionNews /> },
      { path: '/rules', element: <Rules /> },
      { path: '/signup', element: <SignupForm /> },
      // More nested routes here
    ],
  },
]);

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    document.body.classList.toggle('dark-mode', savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };

  return (
    <ErrorBoundary>
      <BackgroundVideo />
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? '🌞' : '🌜'}
      </div>
      <div className="form-wrapper">
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

// Use ContainerRouter for nested routes and App for standalone routes
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <RouterProvider router={ContainerRouter} />
    <App />
  </>
);
