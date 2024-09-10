import { Outlet } from "react-router-dom";
import Header from "./component/Header";

export default function App() {
    return (
        <>
            <Header />
            <body className="bg-[url('../public/background.png')] bg-cover">
                <Outlet />
            </body>
        </>
    );
}
