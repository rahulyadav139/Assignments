import "./styles.css";
import { useState } from "react";

var dictionary = {
  grapes: "🍇",
  melon: "🍈",
  watermelon: "🍉",
  tangerine: "🍊",
  lemon: "🍋",
  banana: "🍌",
  pineapple: "🍍",
  mango: "🥭",
  apple: "🍎",
  "green apple": "🍏",
  pear: "🍐",
  peach: "🍑",
  cherries: "🍒",
  strawberry: "🍓",
  "kiwi fruit": "🥝",
  tomato: "🍅",
  coconut: "🥥",
  avocado: "🥑",
  eggplant: "🍆",
  potato: "🥔",
  carrot: "🥕",
  "ear of corn": "🌽",
  pepper: "🌶",
  cucumber: "🥒",
  "leafy green": "🥬",
  broccoli: "🥦",
  garlic: "🧄",
  onion: "🧅",
  mushroom: "🍄",
  peanuts: "🥜",
  chestnut: "🌰",
  bread: "🍞",
  croissant: "🥐",
  "baguette bread": "🥖",
  pretzel: "🥨",
  bagel: "🥯",
  pancakes: "🥞",
  waffle: "🧇",
  "cheese wedge": "🧀",
  "meat on bone": "🍖",
  "poultry leg": "🍗",
  "cut of meat": "🥩",
  bacon: "🥓",
  hamburger: "🍔",
  "french fries": "🍟",
  pizza: "🍕",
  "hot dog": "🌭",
  sandwich: "🥪",
  taco: "🌮",
  burrito: "🌯",
  "stuffed flatbread": "🥙",
  falafel: "🧆",
  egg: "🥚",
  cooking: "🍳",
  "shallow pan of food": "🥘",
  "pot of food": "🍲",
  "bowl with spoon": "🥣",
  "green salad": "🥗",
  popcorn: "🍿",
  butter: "🧈",
  salt: "🧂",
  "canned food": "🥫",
  "bento box": "🍱",
  "rice cracker": "🍘",
  "rice ball": "🍙",
  "cooked rice": "🍚",
  "curry rice": "🍛",
  "steaming bowl": "🍜",
  spaghetti: "🍝",
  "roasted sweet potato": "🍠",
  oden: "🍢",
  sushi: "🍣",
  "fried shrimp": "🍤",
  "fish cake with swirl": "🍥",
  "moon cake": "🥮",
  dango: "🍡",
  dumpling: "🥟",
  "fortune cookie": "🥠",
  "takeout box": "🥡",
  oyster: "🦪",
  "soft ice cream": "🍦",
  "shaved ice": "🍧",
  "ice cream": "🍨",
  doughnut: "🍩",
  cookie: "🍪",
  "birthday cake": "🎂",
  shortcake: "🍰",
  cupcake: "🧁",
  pie: "🥧",
  "chocolate bar": "🍫",
  candy: "🍬",
  lollipop: "🍭",
  custard: "🍮",
  "honey pot": "🍯",
  "baby bottle": "🍼",
  "glass of milk": "🥛",
  "ot beverage": "☕ ",
  "teacup without handle": "🍵",
  sake: "🍶",
  "bottle with popping cork": "🍾",
  "wine glass": "🍷",
  "cocktail glass": "🍸",
  "tropical drink": "🍹",
  "beer mug": "🍺",
  "clinking beer mugs": "🍻",
  "clinking glasses": "🥂",
  "tumbler glass": "🥃",
  "cup with straw": "🥤",
  "beverage box": "🧃",
  mate: "🧉",
  ice: "🧊",
  chopsticks: "🥢",
  "fork and knife": "🍴",
  spoon: "🥄"
};

export default function App() {
  var emojis = Object.values(dictionary);
  var meaning = Object.keys(dictionary);

  for (let i = 0; i < emojis.length; i++) {
    var inverseDictionary = {};
    emojis.forEach((k, i) => {
      inverseDictionary[k] = meaning[i];
    });
  }

  const [value, setValue] = useState("");

  function userInput(event) {
    var input = event.target.value;
    var emojiValue = dictionary[input];
    setValue(emojiValue);
  }

  function clickHandler(emoji) {
    var meaningValue = inverseDictionary[emoji];

    setValue(meaningValue);
  }

  return (
    <div className="App">
      <h1>Find Emojis for Food and Drinks</h1>
      <div>
        <input onChange={userInput} type="text" />
      </div>
      <br />
      <div>{value}</div>
      <br />

      {emojis.map((emoji) => {
        return (
          <span
            id="emojiView"
            onClick={() => clickHandler(emoji)}
            style={{ cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
