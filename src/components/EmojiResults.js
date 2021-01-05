import React from "react";
import EmojiResultRow from "./EmojiResultRow";

function EmojiResults(props) {
  return (
    <div>
      {props.emojiData.map(emoji => {
        return (
          <EmojiResultRow 
            key={emoji.title}
            symbol={emoji.symbol}
            title={emoji.title}
          />
        );
      })}
    </div>
  );
}

export default EmojiResults;