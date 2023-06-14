import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Errorpage from "../pages/errorpage/Errorpage";
import DashBoard from "../pages/DashBoard/DashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<Errorpage/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Register></Register>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<DashBoard/>
    }
  ]);

export default router;