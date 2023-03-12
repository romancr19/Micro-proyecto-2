import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '5e7e6c56b5afea4044035aef3295e09a'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies"});
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async(searchKey) =>{
    const type = searchKey ? "search" : "discover"
    const {data: { results },
  } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query: searchKey,
    },
  });
  }

  setMovies(results)
  setMovie(results[0])

  useEffect(()=>{
    fetchMovies();
  },[])


  return (
    <div>
      <div className= 'container'>
        <div className= "row">
          {movies.map((movie)=>(
            <div key={movie.id} className="column">
              <img src="{'${URL_IMAGE + movie.poster_path}'}" alt="" height={600} width="100%" />
              <h4 className='tCenter'>{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
