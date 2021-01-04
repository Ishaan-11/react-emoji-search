import React from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";

function App() {

  function handleSearchChange(event) {
    console.log(event.target.value);
  }

  return(
    <div>
      <Header />
      <SearchInput textChange={handleSearchChange}/>
    </div>
  );
}

export default App;