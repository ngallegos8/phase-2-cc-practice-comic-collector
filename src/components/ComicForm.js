// import React, { useState } from 'react'

// function ComicForm({ onComicFormSubmit }) {
//   const [title, setTitle] = useState("")
//   const [issue, setIssue] = useState("")
//   const [image_url, setImage_url] = useState("")
//   const [description, setDescription] = useState("")

//   function handleSubmit(e) {
//     e.preventDefault()
//     const newComic = {
//         title: title,
//         issue: issue,
//         image_url: image_url,
//         description: description
//     }
//     fetch('http://localhost:8004/comics', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newComic)
//     })
//     .then(response => response.json())
//     .then(onComicFormSubmit)
//         setTitle("")
//         setIssue("")
//         setImage_url("")
//         setDescription("")


//   return (

//     <form classtitle="comic-form" onSubmit={handleSubmit}>

//       <h2>Add A New Issue</h2>

//       <label htmlFor="image_url">Image URL: </label>
//       <input title="image_url" value={image_url} onChange={(e) => setImage_url(e.target.value)}/>

//       <label htmlFor="title">Title: </label>
//       <input title="title" value={title} onChange={(e) => setTitle(e.target.value)}/>

//       <label htmlFor="issue">Issue Number: </label>
//       <input title="issue" type="number" value={issue} onChange={(e) => setIssue(e.target.value)}/>

//       <label htmlFor="description">Description: </label>
//       <input title="description" value={description} onChange={(e) => setDescription(e.target.value)}/>

//       <input type="submit" value="Add Issue" />

//     </form>

//   )
// }}

// export default ComicForm;


import { useState } from 'react'

const defaultState = {
  title: '',
  issue: "1",
  image_url: ""
}

function ComicForm({onComicFormSubmit}) {

  const [formState, setFormState] = useState(defaultState)

  function resetForm() {
    setFormState(defaultState)
  }

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:8004/comics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
    .then(res => res.json())
    .then(data => onComicFormSubmit(data))
  }

  const {title, image_url, issue} = formState

  return (

    <form className="comic-form" onSubmit={handleSubmit}>

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input name="image_url" value={image_url} onChange={handleChange} />

      <label htmlFor="title">Title: </label>
      <input name="title" value={title} onChange={handleChange} />

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" value={issue} onChange={handleChange} />

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
