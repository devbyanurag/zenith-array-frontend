
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
