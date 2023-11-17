import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/Landing";
import Login from "./components/LogIn";
import Register from "./components/Register";
import PrivateRoute from "./components/privateRoutes";
import RestaurantPage from "./components/restaurantLandingPage";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* Render the Header for all routes except Landing, Login, and Register */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Protected Routes */}
            <Route
              element={<PrivateRoute roles={["Admin", "Waiter", "Cook"]} />}
            >
               {/* Public Routes for user roles admin, waiter and cook*/}
               <Route path="/restaurantPage" element={<RestaurantPage />} />
            </Route>
            <Route element={<PrivateRoute roles={["Admin"]} />}>
              {/* Public Routes for user role admin*/}

            </Route>
            <Route element={<PrivateRoute roles={["Cook"]} />}>
               {/* Public Routes for user role cook*/}
            </Route>
            <Route element={<PrivateRoute roles={["Waiter"]} />}>
               {/* Public Routes for user role waiter*/}
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
