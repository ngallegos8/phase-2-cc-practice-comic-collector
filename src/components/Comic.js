import { useState } from 'react'

function Comic({ comic, removeComic }) {
  // console.log(comic)

  const [seeImage, setSeeImage] = useState(true)

  function toggleSeeImage() {
    setSeeImage(prev => !prev)
  }

  function handleDelete() {
    fetch(`http://localhost:8004/comics/${comic.id}`, {
      method: "DELETE"
    })
    removeComic(comic.id)
  }

  return (
    <div className="comic-item">

      {
        seeImage
        ?
        <img src={comic.image_url} alt={`Cover for ${comic.title}`} onClick={toggleSeeImage} />
        :
        <>
        <h3 onClick={toggleSeeImage}>{comic.title}</h3>
        <h4 onClick={toggleSeeImage}>{comic.issue}</h4>
        <button onClick={handleDelete}>Remove</button>
        </>
      }
    </div>
  )

}

export default Comic