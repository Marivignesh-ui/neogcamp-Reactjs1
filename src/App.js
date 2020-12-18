import React, { useState } from "react";
import "./styles.css";

var lang;
var movies = {
  actione: [
    { title: "Mulan (2020)", rating: "5.6/10" },
    { title: "Star Wars: The Rise of Skywalker (2019)", rating: "6.6/10" },
    { title: "Inception (2010)", rating: "8.8/10" },
    { title: "Rogue One (2016)", rating: "7.8/10" }
  ],
  adventuree: [
    { title: "Jurassic World (2015)", rating: "7.0/10" },
    { title: "Avengers: Endgame (2019)", rating: "8.4/10" },
    { title: "Interstellar (2014)", rating: "8.6/10" },
    { title: "Journey to the Center of the Earth (2008)", rating: "5.8/10" },
    { title: "Journey 2: The Mysterious Island (2012)", rating: "7.8/10" }
  ],
  scifie: [
    { title: "The Martian (2015)", rating: "8.0/10" },
    { title: "Iron Man (2008)()()", rating: "7.8/10" },
    { title: "The Matrix (1999)", rating: "8.7/10" },
    { title: "Pacific Rim (2013)", rating: "6.9/10" },
    { title: "2001:A Space Odyssey (1968)", rating: "8.3/10" }
  ],
  teche: [
    { title: "Pirates of Silicon Valley (1999)", rating: "7.3/10" },
    { title: "Eagle Eye (2008)", rating: "6.6/10" },
    { title: "Tron: Legacy (2010)", rating: "6.8/10" },
    { title: "The Social Network (2010)", rating: "7.7/10" },
    { title: "Anonymous (2016)", rating: "6.2/10" }
  ],
  actiont: [
    { title: "Kaithi (2019)", rating: "8.5/10" },
    { title: "Theeran Adhigaaram Ondru (2017)", rating: "8.2/10" },
    { title: "Singam 3 (2017)", rating: "6.2/10" },
    { title: "Bogan (2017)", rating: "7.0/10" },
    { title: "Thani Oruvan (2015)", rating: "8.4/10" }
  ],
  adventuret: [
    { title: "Maragadha Naanayam (2017)", rating: "7.0/10" },
    { title: "Peraanmai (2009)", rating: "7.1/10" },
    { title: "Dev (2019)", rating: "4.8/10" },
    { title: "Maryan (2013)", rating: "7.1/10" }
  ],
  scifit: [
    { title: "Enthiran (2010)", rating: "7.1/10" },
    { title: "Tik Tik Tik (2018)", rating: "6.0/10" },
    { title: "Indru Netru Naalai (2015)", rating: "8/10" },
    { title: "Irandam Ulagam  (2013)", rating: "5.5/10" },
    { title: "Tamizhuku En Ondrai Azhuthavum (2015)", rating: "7.0/10" }
  ],
  techt: [
    { title: "Kee (2019)", rating: "5.8/10" },
    { title: "Adanga Maru (2018)", rating: "7.2/10" },
    { title: "Iru Mugan (2016)", rating: "6.3/10" },
    { title: "Irumbu Thirai (2018)", rating: "7.7/10" }
  ]
};

export default function App() {
  function clickhandler() {
    if (event.target.name === "english") lang = "english";
    else lang = "tamil";
  }
  var [nolangmessage, setnolangmessage] = useState("");
  var [list, setlist] = useState([]);
  function clickhandler1() {
    var tempgenre = event.target.name;
    if (lang === undefined) {
      setnolangmessage("Select the language first");
    } else {
      setnolangmessage("");
      if (lang === "english") tempgenre += "e";
      else tempgenre += "t";
      setlist(movies[tempgenre]);
    }
  }
  function errorhandler() {}

  return (
    <div className="App">
      <h1>Movie Recommendation</h1>
      <h2>Select a language</h2>
      <button onClick={clickhandler} name="tamil">
        Tamil
      </button>
      <button onClick={clickhandler} name="english">
        English
      </button>
      <h2>Select a Genre</h2>
      <button onClick={clickhandler1} name="action">
        Action
      </button>
      <button onClick={clickhandler1} name="adventure">
        Adventure
      </button>
      <button onClick={clickhandler1} name="scifi">
        Sci-fi
      </button>
      <button onClick={clickhandler1} name="tech">
        Tech
      </button>
      <hr></hr>
      <h3>{nolangmessage}</h3>
      <ul>
        {list.map(function (ob1) {
          return (
            <li key={ob1}>
              {ob1.title}
              <br></br>
              {ob1.rating}
            </li>
          );
        })}
      </ul>
      <footer>
        <h3>About</h3>
        <p>
          This is a simple React movie Recommendation app.It suggests good list
          of movies and its imdb rating of all genre.
        </p>
        <strong>follow me on:</strong>
        <a href="https://github.com/marivignesh-ui">
          <i class="fab fa-github socialmedia" style={{ fontSize: "30px" }}></i>
        </a>
        &nbsp;&nbsp;
        <a href="https://www.instagram.com/marivignesh499/">
          <i
            class="fab fa-instagram socialmedia"
            style={{ fontSize: "30px" }}
          ></i>
        </a>
      </footer>
    </div>
  );
}
