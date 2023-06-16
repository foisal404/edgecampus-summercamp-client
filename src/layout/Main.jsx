import { Outlet } from "react-router-dom";
import NavHeadBar from "../pages/Shared/NavHeadBar";
import Footerbar from "../pages/Shared/Footerbar";


const Main = () => {
    return (
        <div>
            <NavHeadBar/>
            <Outlet/>
            <Footerbar/>
        </div>
    );
};

export default Main;