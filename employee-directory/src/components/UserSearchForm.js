import React from "react";

function UserSearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
        {/* <button onClick={props.handleFormSubmit} className="btn btn-primary"></button> */}
      </div>
    </form>
  );
}
// Sort:
// Toggle button/checkbox to enable sort by asc or desc
// Event handler to track click event on toggle
// Attach event handler to state to keep track of toggled state of button (for #2 and #3, handleSortChange: find how handleInputChange is being defined (line 32), copy it, refactor, pass in as prop--use handleInputChange as model)
// Use value of toggled state to sort results from fetch request
// What happens when button is untoggled? Back to unsorted results? Or sort by desc?

// Filter:
// Use get users button and input field in handleInputChange
// Create dropdown to select what to filter by

export default UserSearchForm;