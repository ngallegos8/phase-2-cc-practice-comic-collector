import Comic from "./Comic"

function ComicsContainer({ comics, removeComic }) {
  // console.log(comics)

  const comicList = comics.map(comic => {
    return <Comic key={comic.id} comic={comic} removeComic={removeComic}/> 
})

  return (
    <>
      {comicList}
    </>
  )

}

export default ComicsContainer
