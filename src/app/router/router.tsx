import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import AuthPage from "../../pages/Auth/AuthPage";
import RegPage from "../../pages/Auth/RegPage";
import NotFound from "../../shared/ui/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "auth",
        element: <AuthPage />,
      },
      {
        path: "reg",
        element: <RegPage />,
      },
    ],
  },
]);

export default router;
