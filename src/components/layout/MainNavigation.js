import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// classes is an object where all the classes in file MainNavigation.module.css will be the properties of this object.
function MainNavigation() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            {/* <a href="/">All Meetups</a> --ignore this because it sends extra request on server so use link to directly load page */}
            <Link to={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link to={"/favourites"}>Favourites</Link>
          </li>
          <li>
            <Link to={"/add-meetup"}>New Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
