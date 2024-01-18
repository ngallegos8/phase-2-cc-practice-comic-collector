import Comic from "./Comic"

function ComicsContainer({ comics, removeComic, updateComic }) {
  // console.log(comics)

  const comicList = comics.map(comic => {
    return <Comic key={comic.id} comic={comic} removeComic={removeComic} updateComic={updateComic}/> 
})

  return (
    <>
      {comicList}
    </>
  )

}

export default ComicsContainer
