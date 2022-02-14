import React from "react";
import emojipedia from '../emojipedia'
import Emoji from './Emoji'

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(function(emoji)
        {
          return <Emoji 
            key = {emoji.id}
            name = {emoji.name}
            meaning = {emoji.meaning}
            emoji = {emoji.emoji}
          />
        })}
      </dl>
    </div>
  );
}

export default App;
