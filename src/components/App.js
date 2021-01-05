import React, { useState } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "../filterEmoji";

function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji("", 20));

  function handleSearchChange(event) {
    setFilteredEmoji(filterEmoji(event.target.value, 20));
  }

  return(
    <div>
      <Header />
      <SearchInput textChange={handleSearchChange}/>
      <EmojiResults emojiData={filteredEmoji}/>
    </div>
  );
}

export default App;