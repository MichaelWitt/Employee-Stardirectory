import React, { Component } from "react";
import API from "../utils/API";

class DataTable extends Component {
  state = {
    order: "descending",
    filteredUsers: [],
  };

  users = [];

  componentDidMount() {
    API.getUsers().then((results) => {
      this.users = results.data.results;
      console.log("this.users:", this.users);
      this.setState({
        filteredUsers: this.users,
      });
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Star</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
              <th>Location</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredUsers.map((user) => {
              return (
                <tr key={user.id.value}>
                  <td>
                    <img src={user.picture.medium} alt="Employees"></img>
                  </td>
                  <td>{user.name.first + " " + user.name.last}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.login.username}</td>
                  <td>{user.location.city + ", " + user.location.state}</td>
                  <td>{user.dob.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
