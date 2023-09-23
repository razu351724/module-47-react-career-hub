import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <h3>Root vi</h3>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;