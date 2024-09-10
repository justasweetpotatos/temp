import { Outlet } from "react-router-dom";
import Header from "./component/Header";

export default function App() {
    return (
        <>
            <Header />
            <body className="overflow-hidden max-h-screen">
                <div className="bg-[url('../public/background.png')] bg-cover pt-20 h-fit">
                    <Outlet />
                </div>
            </body>
        </>
    );
}
