import React from "react";

function UserResultList(props) {
  return (
    <section className="text-center">
      <table>
        <thead>
          <tr>
            <th scope="col">Name:</th>
            <th scope="col">Location: </th>
            <th scope="col">Email: </th>
            <th scope="col">Phone: </th>
            <th scope="col">Cell: </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.location}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.cell}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default UserResultList;
