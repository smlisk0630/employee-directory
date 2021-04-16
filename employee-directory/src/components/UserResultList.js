import React from "react";

function UserResultList(props) {
    return (
      <div className="text-center">
        <img alt={props.name} className="img-fluid" location={props.location} style={{ margin: "0 auto" }} />
        <h3>Email: {props.email}</h3>
        <h3>Phone: {props.phone}</h3>
        <h3>Cell: {props.cell}</h3>
      </div>
    );
  }

export default UserResultList;