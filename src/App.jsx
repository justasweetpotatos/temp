import { Outlet } from "react-router-dom";
import Header from "./component/Header";

export default function App() {
    return (
        <>
        <head>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <title>MSOC</title>
        </head>
            <Header />
            <body className="min-h-screen">
                <div className="bg-[url('../public/background.png')] bg-cover min-h-screen pt-20">
                    <div className="container mx-auto min-h-full">
                        <Outlet />
                    </div>
                </div>
            </body>
        </>
    );
}
