const getData = async (initialQuery) => {
  const api_key = process.env.REACT_APP_API_KEY


  try {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${initialQuery}&language=en-US&page=1&include_adult=false`)
    const data = await res.json()
    return data
  } catch (err) {
    alert(`Something went wrong ${err}`)
  }
}

export default getData;