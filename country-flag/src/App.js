import "./styles.css";
import { useState } from "react";

export default function App() {
  var input = "";
  var [crname, setCrName] = useState("United Nations");
  var [link, setLink] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1024px-Flag_of_the_United_Nations.svg.png?1636029729970"
  );
  var [crList, setCrList] = useState(["India", "Pakistan", "Nepal"]);

  function inputHandler(event) {
    input = event.target.value;
  }
  function clickHandler() {
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((res) => res.json())
      .then((json) => {
        var cArray = json.data.map((i) => i.name.toLowerCase());
        var fArray = json.data.map((i) => i.flag);

        var cfObj = {};

        for (let i = 0; i < cArray.length; i++) {
          cArray.forEach((k, i) => {
            cfObj[k] = fArray[i];
          });
        }

        setLink(cfObj[input.toLowerCase()]);
        setCrName(input);
      });
  }

  function showMoreCountry() {
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((res) => res.json())
      .then((json) => setCrList(json.data.map((i) => i.name)));
  }
  function showSelectedCountryFlag(cr) {
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((res) => res.json())
      .then((json) => {
        var cArray = json.data.map((i) => i.name);
        var fArray = json.data.map((i) => i.flag);

        var cfObj = {};

        for (let i = 0; i < cArray.length; i++) {
          cArray.forEach((k, i) => {
            cfObj[k] = fArray[i];
          });
        }
        setLink(cfObj[cr]);
        setCrName(cr);
      });
  }

  return (
    <div className="App">
      <h1>Seach Country Flag</h1>
      <input onChange={inputHandler} placeholder="Enter Country Name" />
      <button onClick={clickHandler}>Search</button>
      <h2>{crname}</h2>
      <img
        style={{
          display: "block",
          margin: "2rem auto",
          border: "5px outset silver"
        }}
        src={link}
        alt="Country flag"
        width="150"
        height="100"
      />

      <ul>
        {crList.map((cr) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              key={cr}
              onClick={() => showSelectedCountryFlag(cr)}
            >
              {cr}
            </li>
          );
        })}
        <li style={{ cursor: "pointer" }} onClick={showMoreCountry}>
          More Countries
        </li>
      </ul>
    </div>
  );
}
