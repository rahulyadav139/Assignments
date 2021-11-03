import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😉": "Winking Face",
  "😘": "Face Blowing a Kiss",
  "🤗": "Hugging Face",
  "🤐": "Zipper-Mouth Face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmoji(meaning);
  }

  function getbg(index) {
    if (index % 2) {
      return "red";
    }
    return "blue";
  }

  const [emoji, setEmoji] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have that in our database";
    }

    setEmoji(meaning);
  }

  // var emojiDictionaryArray = ["😀", "😉", "😘", "🤗", "🤐"]

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler} type="text" />
      <br />
      <div>
        <strong>Meaning: {emoji}</strong>
      </div>

      <h3>Emoji we know</h3>
      {emojiWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 1rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      {/* <ul>
        {
          emojiDictionaryArray.map((item, index) => {

            return <li 
            key={item}
            onClick={() => clickHandler(item)}
            style={{backgroundColor: getbg(index)}} className="emojiItem" >{item}</li>
          })
        }
      
      
      </ul> */}
    </div>
  );
}
