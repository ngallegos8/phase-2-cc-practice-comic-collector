import { useState } from 'react'

function Comic({ comic, removeComic, updateComic }) {
  // console.log(comic)

  const [seeImage, setSeeImage] = useState(true)
  const [favorite, setFavorite] = useState(false)
  const [title, setTitle] = useState("")
  const [issue, setIssue] = useState("")
  const [image_url, setImage_url] = useState("")
  const [editMode, setEditMode] = useState(false)

  function toggleSeeImage() {
    setSeeImage(prev => !prev)
  }

  function handleDelete() {
    fetch(`http://localhost:8004/comics/${comic.id}`, {
      method: "DELETE"
    })
    removeComic(comic.id)
  }

  function handleEditComicSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:8004/comics/${comic.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title: title, issue: issue, image_url: image_url})
    })
    .then(response => response.json())
    .then(updateComic)
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
        {favorite ? (
          <button onClick={() => setFavorite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(true)} className="emoji-button favorite">☆</button>
        )}
        <button onClick={handleDelete}>Remove</button>
        
        <button onClick={() => setEditMode(true)}>Edit</button>
        

        { editMode ? (
          <form className="edit-comic-form" onSubmit={handleEditComicSubmit}>
            <h2>Edit Comic</h2>

            <label htmlFor="image_url">Image URL: </label>
            <input name="image_url" value={image_url} onChange={(e) => setImage_url(e.target.value)} />

            <label htmlFor="title">Title: </label>
            <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="issue">Issue Number: </label>
            <input name="issue" type="number" value={issue} onChange={(e) => setIssue(e.target.value)} />

            <input type="submit" value="Add Issue" />
            <button>Update Comic</button>
          </form>
          ) : null        
        } 
        </>
      }
    </div>
  )

}

export default Comic