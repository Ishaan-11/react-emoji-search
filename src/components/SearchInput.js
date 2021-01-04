import React from "react";
import "./SearchInput.css";

function SearchInput(props) {

  function handleChange(e) {
    props.textChange(e);
  }

  return (
    <div className="component-search-input">
      <div>
        <input onChange={handleChange}/>
      </div>
    </div>
  );
}

export default SearchInput;