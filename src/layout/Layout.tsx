import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-[#0f1218] text-white p-4">
            <h1 className="text-2xl font-bold">My Application</h1></header>
      <Navbar />
      <main className="p-4 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
