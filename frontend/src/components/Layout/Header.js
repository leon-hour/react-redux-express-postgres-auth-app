import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";
// reactstrap components

function Header() {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logout());
  };
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/restaurants" className="text-white text-3xl font-bold">
            RestaurantPoint
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/restaurants"
              className="text-white text-xl hover:text-blue-200"
            >
              Restaurants
            </Link>
            <button
              className="text-white text-xl hover:text-blue-200"
              onClick={handleSignOut}
            >
              SignOut
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
