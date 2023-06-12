import { Outlet } from "react-router-dom";
import NavHeadBar from "../pages/Shared/NavHeadBar";


const Main = () => {
    return (
        <div>
            <NavHeadBar/>
            <Outlet/>
        </div>
    );
};

export default Main;