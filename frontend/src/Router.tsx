import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewsScreen from "./screens/NewsScreen";
import FormNews from "./screens/FormNews";


function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NewsScreen />,
    },
    {
      path: "news/:newsId",
      element: <FormNews />,
    },
    {
      path: "news/new",
      element: <FormNews />,
    },
  ]);

  return <RouterProvider router={router} />

}


export default Router