import React, { Component } from "react";
import MaterialTable from "material-table";

class EmployeeTable extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Star", field: "star" },
            { title: "Name", field: "name" },
            { title: "Email", field: "email" },
            { title: "Phone", field: "phone" },
            { title: "Username", field: "username" },
            { title: "Location", field: "location" },
            { title: "Age", field: "age" },
          ]}
          data={[
            {
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

// ReactDOM.render(<EmployeeTable />, document.getElementById("root"));

export default EmployeeTable;
