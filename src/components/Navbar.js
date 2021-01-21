import React from "react";

function Navbar() {
  return (
      <div>
    <nav className="navbar navbar-light bg-light justify-content-between">
  <a className="navbar-brand font-weight-bold">Employees</a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</div>
  );
}

export default Navbar;