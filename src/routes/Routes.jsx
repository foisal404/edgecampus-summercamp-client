import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Errorpage from "../pages/errorpage/Errorpage";
import DashBoard from "../pages/DashBoard/DashBoard";
import AllUsers from "../pages/DashBoard/AllUasers/AllUsers";
import AllClasses from "../pages/DashBoard/AllClasses/AllClasses";
import PrivateRoutes from "./PrivateRoutes";
import AddClass from "../pages/DashBoard/AddClass/AddClass";
import MyClasses from "../pages/DashBoard/MyClasses/MyClasses";

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
      element:<PrivateRoutes><DashBoard/></PrivateRoutes>,
      children:[
        {
          path:"allusers",
          element:<AllUsers/>
        },
        {
          path:"allclasses",
          element:<AllClasses/>
        },
        {
          path:"addclass",
          element:<AddClass/>
        },
        {
          path:"myclass",
          element:<MyClasses/>
        }
      ]
    }
  ]);

export default router;