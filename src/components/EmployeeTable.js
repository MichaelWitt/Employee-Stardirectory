import React, { Component} from "react";
import API from "../utils/API";

// Hooks Example
// function EmpTable () {
//     const [getUserList, setUserList] = useState([])
//     setUserList(results.data.resutlts)
//     getUserList()
// }

class EmployeeTable extends Component {
    state = {
        order: "descending",
        filteredUsers: [],
    }

    users = [];

    // create a handleSort function that sorts the data list on click
    // if this.state.order = descendging, make it ascending and vise versa

    // if this.state.order is asc || dec, have a functino that alphabatizes the data based on last name (google alphabatize elements in an array)

    componentDidMount() {
        API.getUsers().then(results => {
            this.users = results.data.results;
            console.log('this.users:', this.users)
            this.setState({
                filteredUsers: this.users
            });   
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Star</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Age</th>
                        </tr> 
                    </thead>
                    <tbody>
                    {this.state.filteredUsers.map(user => { 
                        return (
                            <tr key={user.id.value}>
                                <td><img src={user.picture.medium} alt='Employees'></img></td>
                                <td>{user.name.first + " " + user.name.last}</td>
                                <td>{user.phone}</td>
                                <td>{user.location.city}</td>
                                <td>{user.dob.age}</td>
                            </tr>
                            )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
};

/* this.state.users.map(user => {
                        return (
                            <UserRow 
                                lastName={user.name.last} 
                                phone={user.phone}
                            />)
                    })}*/

export default EmployeeTable;