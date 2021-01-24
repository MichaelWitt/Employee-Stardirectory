import React, { Component } from "react";
import MaterialTable from "material-table";
import API from "../utils/API";
import DataTable from "./DataTable";

class EmployeeTable extends Component {
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

  dataGrab() {
    this.state.filteredUsers.map((user) => {
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
    });
  }

  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
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
        <MaterialTable
          columns={[
            {
              title: "Star",
              field: "star",
              render: (rowData) => (
                <img src={rowData.star} alt={rowData.star} />
              ),
            },
            { title: "Name", field: "name" },
            { title: "Email", field: "email" },
            { title: "Phone", field: "phone" },
            { title: "Username", field: "username" },
            { title: "Location", field: "location" },
            { title: "Age", field: "age" },
          ]}
          data={[
            {
              star: "https://randomuser.me/api/portraits/med/women/6.jpg",
              name: "Michael Wittorp",
              email: "Mikewittorp@gmail.com",
              phone: "910-599-4722",
              username: "michaelwitt",
              location: "Wilmington, NC",
              age: "28",
            },
            {
              name: "Charles Wittorp",
              email: "Charleswittorp@gmail.com",
              phone: "910-599-4721",
              username: "superwitt",
              location: "Orlando, NC",
              age: "29",
            },
          ]}
          title="⭑"
        />
      </div>
    );
  }
}

export default EmployeeTable;
