import './App.css';
import { useState, useEffect } from "react"

const baseURL = "https://ghibliapi.vercel.app"

function App() {

  const [films, setFilms] = useState([])

  useEffect(() => {
    const fetchFilms = async () => {
      const result = await fetch(baseURL + "/films")
      const filmsData = await result.json()
      setFilms(filmsData)
      // result.json().then(json => {
      //   console.log(json);
      // })
    }
    fetchFilms();
  }, []);

  console.log(films)
  if (!films) {
    return (
      <div className="App">
        <header className="App-header">Loading...</header>
      </div>
    );
  }

 const filmTitles = films.map((film) => film.title)
 const filmPicURL = films.map((film) => film.image)


  return (
    <div>
      <header className="App-header">Here Are Films :)
        </header>
      {films.map((film) => {//film)}
      return (
      <><div>
            <li>{film.title} <img src={film.image}></img> </li>
          </div></>
      );
      })}
    </div>
  );
}

export default App;
