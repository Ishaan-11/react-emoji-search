import React, { useEffect } from "react";
import EmojiResultRow from "./EmojiResultRow";
import Clipboard from "clipboard";

function EmojiResults(props) {

  useEffect(() => {
    let clipboard = new Clipboard(".copy-to-clipboard");
    console.log("mount");

    return function cleanup() {
      console.log("unmount");
      clipboard.destroy();
    };
  });

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