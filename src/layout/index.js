import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Layout() {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-4xl font-bold">Projects</h1>
        <h2>Web application for project management</h2>
        <br></br>
      </div>

      <MainNavigation />
      <br />
      <Outlet />
    </div>
  );
}

export default Layout;
