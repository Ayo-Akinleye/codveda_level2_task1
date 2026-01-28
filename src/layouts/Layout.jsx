import Header from "../Components/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="h-screen flex flex-col">

            <Header />

            <main className="flex-1 h-[calc(100vh-4rem)]">
                <Outlet />
            </main>

        </div>
    )
}

export default Layout
