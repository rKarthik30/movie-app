import React from 'react'
import {useDispatch} from 'react-redux'
import {removeMovie} from '../action/movieActions'

const MovieCard = (props) => {
  const {movie} = props
  const dispatch = useDispatch()
   
  const handleRemove = (id) => {
      dispatch(removeMovie(id))
  } 
  return(
    <div class="card">
      <h3>{movie.name}</h3>
      <p>#{movie.rank}</p>
      <button onClick={() => {handleRemove(movie.id)}}>Delete</button>
    </div>
  )
}


export default MovieCard