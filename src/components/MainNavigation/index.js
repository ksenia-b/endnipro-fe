import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <div className="">
      <nav className=" font-bold ">
        <ul className="flex">
          <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
