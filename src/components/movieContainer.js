import React from 'react'
import MoviesList from './moviesList'
import MoviesForms from './movieForms'
import MoviesStats from './movieStats'
import './style.css'


const MovieContainer = (props) => {
  return(
    <div class="parent">
      <div class="list">
        <MoviesList/>
      </div>
      <div class="form">
        <MoviesForms/>
        <div class="stats">
          <MoviesStats/>
        </div>
      </div>
    </div>
  )
}

export default MovieContainer