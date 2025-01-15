import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import AuthPage from "../../pages/Auth/AuthPage";
import RegPage from "../../pages/Auth/RegPage";
import NotFound from "../../shared/ui/NotFound";
import LibrariesPage from "../../pages/Library/LibrariesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <LibrariesPage />,
      },
      {
        path: "library",
        element: <LibrariesPage />,
      },
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
