import { Outlet } from "react-router-dom";
import Header from "./component/Header";

export default function App() {
    return (
        <>
            <Header />
            <body>
                <Outlet />
            </body>
        </>
    );
}
