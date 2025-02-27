import React, { useState, useEffect } from "react"
import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"

function App() {
  const [comics, setComics] = useState([])

  // console.log(comics)

  useEffect(() => {
    fetch("http://localhost:8004/comics")
      .then(response => response.json())
      .then(setComics)
  }, [])

  function handleComicFormSubmit(newComic) {
    setComics([...comics, newComic])
  }

  function removeComic(id) {
    const newComics = comics.filter((comic) => comic.id !== id)
    setComics(newComics)
  }

  function handleUpdateComic(newComic) {
    const updatedComics = comics.map((comic) => {
      if (comic.id === newComic.id) {
        return newComic
      } else {
        return comic
      }
    })
    setComics(updatedComics)
  }


  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics} removeComic={removeComic} updateComic={handleUpdateComic}/>
        </div>

        <div className="sidebar">
          <ComicForm onComicFormSubmit={handleComicFormSubmit}/>
        </div>

      </div>


    </div>
  );
}

export default App;
