import React from "react";

function UserResultList(props) {
    return (
      <div className="text-center">
        <h3>Name: {props.name}</h3>
        <h3>Location: {props.location}</h3>
        <h3>Email: {props.email}</h3>
        <h3>Phone: {props.phone}</h3>
        <h3>Cell: {props.cell}</h3>
      </div>
    );
  }

export default UserResultList;