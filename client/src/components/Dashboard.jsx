import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="left_side bg-blue-950 text-amber-50 fixed z-1 w-1/6 h-full">
      <div className="dashboard ">
        <h1 className="bg-blue-900 text-center font-bold text-3xl px-6 py-5">
          Dashboard
        </h1>

        <ul>
          <Link to="/inventory-table">
            <li className="py-3 text-lg text-blue-50 px-5 border-black border-b-1 hover:bg-gray-50 hover:text-blue-900 hover:font-bold ">
              Inventory Table
            </li>
          </Link>

          <Link to="/add-inventory">
            <li className="py-3 text-lg hover:bg-gray-50 hover:font-bold hover:text-blue-900 text-blue-50 px-5 border-black border-b-1">
              Add Inventory
            </li>
          </Link>

          <Link to="/issue-inventory">
            <li className="py-3 text-lg text-blue-50 px-5  hover:font-bold hover:bg-gray-50 hover:text-blue-900 border-black border-b-1">
              Issue Inventory
            </li>
          </Link>

          <Link to="/issue-inventory-table">
            <li className="py-3 text-lg  text-blue-50 px-5 hover:font-bold hover:bg-gray-50 hover:text-blue-900 border-black border-b-1">
              Issued Inventory Table
            </li>
          </Link>

          <Link to="/threshold">
            <li className="py-3 text-lg hover:bg-gray-50 hover:font-bold hover:text-blue-900 text-blue-50 px-5 border-black border-b-1">
              Threshold
            </li>
          </Link>

          <Link to="/summary">
            <li className="py-3 text-lg hover:bg-gray-50 hover:font-bold hover:text-blue-900 text-blue-50 px-5 border-black border-b-1">
              Summary
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
