import React, { Component } from "react";
import MaterialTable from "material-table";

class EmployeeTable extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "star", field: "star" },
            { title: "name", field: "name" },
            { title: "email", field: "email" },
            { title: "phone", field: "phone" },
            { title: "username", field: "username" },
            { title: "location", field: "location" },
            { title: "age", field: "age" },
          ]}
          data={[
            {
              name: "Michael",
              email: "Wittorp",
              phone: "910-599-4722",
              username: "michaelwitt",
              location: "Wilmington, NC",
              age: "28",
            },
            {
              name: "Charles",
              email: "Wittorp",
              phone: "910-599-4721",
              username: "superwitt",
              location: "Orlando, NC",
              age: "29",
            },
          ]}
          title="Demo Title"
        />
      </div>
    );
  }
}

// ReactDOM.render(<EmployeeTable />, document.getElementById("root"));

export default EmployeeTable;
