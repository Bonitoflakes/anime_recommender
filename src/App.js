import React, { useState } from "react";
import "./styles.css";

const animeDB = {
  noob: [
    { name: "Naruto", rating: "4/5" },
    { name: "Naruto Shippuden", rating: "5/5" }
  ],

  sliceoflife: [
    {
      name: "Mob Pyscho 100",
      rating: "5/5"
    },
    {
      name: "Your lie in April",
      rating: "4.5/5"
    }
  ],
  romance: [
    {
      name: "Weathering With you",
      rating: "5/5"
    },
    {
      name: "I want to eat your pancreas",
      rating: "5/5"
    }
  ],

  Psychological: [
    {
      name: "Death Note",
      rating: "5/5"
    },
    {
      name: "The promised Neverland",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("noob");

  function clickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>BonitoFlakes Anime Recommendation</h1>
      <div className="anime_button">
        {Object.keys(animeDB).map((item) => (
          <button onClick={() => clickHandler(item)} key={item}>
            {item}
          </button>
        ))}
      </div>
      {/*  */}
      <div>
        <ul>
          {animeDB[selectedGenre].map((anime) => (
            <li
              key={anime.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger", textAlign: "left" }}>
                {anime.name}
              </div>
              <div style={{ fontSize: "smaller", textAlign: "left" }}>
                {anime.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/*  */}
    </div>
  );
}
