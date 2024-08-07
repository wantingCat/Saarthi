import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
