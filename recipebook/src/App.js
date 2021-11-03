import "./styles.css";
import { useState } from "react";

var racipeBook = {
  "Sabudana Thalipeeth": {
    introduction: [
      "Prep Time : 7-8 hour",
      "Cook time : 21-25 minutes",
      "Serve : 4",
      "Level Of Cooking : Easy",
      "Taste : Mild"
    ],
    ingredients: [
      "Sago (sabudana) , soaked for 7-8 hours 1 cup",
      "Peanuts , roasted and peeled 3/4 cup",
      "Green Chilli 1",
      "Fresh coriander leaves chopped 1 1/2",
      "tablespoons",
      "Mint Chutney 1 tablespoon",
      "Salt to taste",
      "Sugar 3/4 teaspoon",
      "Lemon juice 1 teaspoon",
      "Cumin seeds (jeera) 1/2 teaspoon",
      "Ghee for basting"
    ],
    method: [
      "Step 1: Put peanuts in a grind jar, add broken green chilli and 1 tablespoon coriander leaves and grind coarsely.",
      "Step 2: Take sago in a bowl, add ground peanut mixture, 1 tablespoon mint chutney, remaining coriander leaves, salt, sugar, lemon juice and cumin seeds and mix well with your hand. Add some water and continue to mix with hand till well combined into a dough.",
      "Step 3: Heat a non-stick tawa.",
      "Step 4: To prepare each thalipeeth, dampen your palm with some water, take a small portion of dough, shape into a ball, keep on the hot tawa and spread into a small disc. Make a cavity in the center of the disc.",
      "Step 5: Drizzle some ghee around the sides and on top of the discs and in the cavity, cook, turning sides and drizzling some more ghee, till both sides are evenly golden on both sides. Make more thalipeeths in the same way.",
      "Step 6: Arrange the thalipeeths on a serving plate and serve hot with mint chutney or with yogurt."
    ]
  },
  "Oats Dhokle": {
    introduction: [
      "Prep Time : 0-5 minutes",
      "Cook time : 16-20 minutes",
      "Serve : 4",
      "Level Of Cooking : Moderate",
      "Taste : Mild"
    ],
    ingredients: [
      "Oats Flour 50 grams",
      "Gram Flour 200 grams",
      "Yogurt 1 cup",
      "Sugar 1 tablespoon",
      "Baking soda 1½ teaspoons",
      "Citric acid 1½ teaspoons",
      "Rice bran oil 5-6 tbsps + for greasing",
      "Asafoetida ½ teaspoon",
      "Mustard seeds 1½ teaspoons",
      "Green chillies Chopped 3-4",
      "Curry leaves 16-20",
      "Sugar 4 tablespoon"
    ],
    method: [
      "Step 1: Put gram flour, oats flour, yogurt, sugar, baking soda and citric acid in a bowl, add sufficient water and mix till smooth.",
      "Step 2: Add 3-4 tbsps rice bran oil and mix.",
      "Step 3: Heat sufficient water in a steamer.",
      "Step 4: Grease the dhokla plates with a little oil. Pour the batter into the plates and fit them into the stand.",
      "Step 5: Keep the stand in the steamer and steam for 15-20 minutes. Take the stand out and remove the plates. Cut the dhokla into squares but do not separate them.",
      "Step 6: Heat remaining oil in a non-stick pan, add asafoetida, mustard seeds and green chillies and saute till the seeds splutter. Add curry leaves and pour this mixture over the dhokla in each plate.",
      "Step 7: In the same pan, cook sugar with ½ cup water till sugar melts. Pour the syrup over the dhokla and set aside till the syrup is completely absorbed.",
      "Step 8: Separate the dhokla squares and serve."
    ]
  },
  "Dal Makhani": {
    introduction: [
      "Prep Time : 8-10 hour",
      "Cook time : 41-50 minutes",
      "Serve : 4",
      "Level Of Cooking : Easy",
      "Taste : Spicy"
    ],
    ingredients: [
      "Red kidney beans (rajma) soaked for 8-10 hours and drained ¼ cup",
      "Whole black gram (sabut urad) soaked for 8-10 hours and drained 1 cup",
      "Salt to taste",
      "Ginger grated 1 tablespoon",
      "Ghee 1½ tablespoons",
      "Cumin seeds 1 teaspoon",
      "Garlic chopped 1 tablespoon",
      "Onion finely chopped 1 large",
      "Tomato finely chopped 1 large",
      "Red chilli powder 2 teaspoons",
      "Garam masala powder 1 teaspoon",
      "Fresh cream 1 tablespoon + for drizzling",
      "Ginger strips for garnishing"
    ],
    method: [
      "Step 1: Take black gram and kidney beans in a pressure cooker. Add 2-2½ cups water, salt and ½ tablespoon grated ginger, mix, cover and cook under pressure, on medium heat, till 8-10 whistles are given out. Remove from heat, cool slightly and stir.",
      "Step 2: Place the pressure cooker back on heat and continue to cook on low heat.",
      "Step 3: Heat ghee in a non-stick pan. Add cumin seeds and sauté for 30 seconds. Add remaining grated ginger and sauté. Add garlic and sauté till golden.",
      "Step 4: Add onion and sauté till golden. Add tomato and sauté till soft and pulpy.",
      "Step 5: Lightly mash the cooked dal mixture.Add cooked tomato mixture and mix.",
      "Step 6: Add chilli powder and garam masala powder and cook for 10-12 minutes, stirring continuously. Add cream and mix well. Adjust the salt and mix.",
      "Step 7: Drizzle some cream on top, garnish with ginger strips and serve hot."
    ]
  }
};

export default function App() {
  var [recipeSelected, setRecipe] = useState("Sabudana Thalipeeth");

  function clickHandler(i) {
    setRecipe(i);
  }

  return (
    <div className="App">
      <nav>
        <h1>Recipebook</h1>
        <h3 style={{ margin: "0rem" }}>
          Food, food, food! Who does not love a good food? We are always on the
          hunt for a good restaurant, and we are also on the hunt for
          easy-cooking, good meals recipes.
        </h3>
      </nav>

      <div style={{ padding: "1rem" }}>
        <ul id="racipeList">
          {Object.keys(racipeBook).map((i) => {
            return (
              <li
                id="test"
                style={{
                  cursor: "pointer",
                  listStyle: "none",
                  display: "inline",
                  padding: "0.5rem",
                }}
                onClick={() => clickHandler(i)}
              >
                {i}
              </li>
            );
          })}
        </ul>
      </div>
      <main>
        <div id="div-column-one">
          <h3 class="intro">Introduction :</h3>
          <ul>
            {racipeBook[recipeSelected].introduction.map((test) => {
              return <li>{test}</li>;
            })}
          </ul>
        </div>
        <div id="div-column-two">
          <h3 class="intro">Ingredients :</h3>
          <ul>
            {racipeBook[recipeSelected].ingredients.map((test) => {
              return <li>{test}</li>;
            })}
          </ul>
        </div>
        <div id="div-column-three">
          <h3 class="intro">Method :</h3>
          <ul>
            {racipeBook[recipeSelected].method.map((test) => {
              return <li>{test}</li>;
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
