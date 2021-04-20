import React from "react";
//import data from "../../src/data/data.json";

function UserResultList(props) {
  console.log(props);
  return (
    <section className="text-center">
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location </th>
            <th scope="col">Email </th>
            <th scope="col">Phone </th>
            <th scope="col">Cell </th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(user => {
            return  (           
              <tr>
                <td>{user.name.first + " " + user.name.last}</td>
                <td>{user.location.state + " " + user.location.postcode}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.cell}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </section>
  );
}

export default UserResultList;
