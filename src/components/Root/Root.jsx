import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h3>Root vi</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;