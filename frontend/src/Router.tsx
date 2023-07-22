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
      children: [
        {
          path: "news/:newsId",
          element: <FormNews />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />

}


export default Router