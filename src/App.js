import React from 'react'
import MoviesContainer from './components/movieContainer'

const App = (props) => {
  return(
    <div class="margin">
      <h1>My Big Movie List</h1>
      <MoviesContainer/>
    </div>
  )
}

export default App