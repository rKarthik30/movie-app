import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import MovieCard from './movieCard'
import {AtoZ,ZtoA,ascending,decending} from '../action/movieActions'

const MoviesList = (props) => {
  const [filter,setFilter] = useState('')
  const [search,setSearch] = useState('')
  const [sortMovie,setSortMovie] = useState([])
  const movie = useSelector((state) => {
    return state.movie
  })
  const dispatch = useDispatch()
  
  useEffect(() => {
    setSortMovie(movie)
  },[movie])

  const handleFilterChange = (e) => {
     setFilter(e.target.value)
  }
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    const result = movie.filter((ele) => {
      return ele.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log('line29',result);
    setSortMovie(result)
    setSearch('')
  }
  
  if(filter === 'A-Z'){
    dispatch(AtoZ())
  }else if(filter === 'Z-A'){
    dispatch(ZtoA())
  }else if(filter === 'low-rank'){
    dispatch(ascending())
  }else if(filter === 'top-rank'){
    dispatch(decending())
  }
   
  return(
    <div>
      {sortMovie.length > 0 && (
      <div class='movie-list'>
        <form>
        <input type="text" value={search} placeholder="search by movie" onChange={handleSearchChange}/>
          <select value={filter} onChange={handleFilterChange}>
            <option>Filter</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="top-rank">Top Rank</option>
            <option value="low-rank">Low Rank</option>
          </select>
        </form>
        <div class="parent">
          {sortMovie.map((ele) => {
            // console.log(ele);
            return <MovieCard key={ele.id} movie={ele}/>
          })}
        </div>
      </div>
      )}
    </div>
  )
}

export default MoviesList