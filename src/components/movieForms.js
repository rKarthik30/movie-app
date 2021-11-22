import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addMovie} from '../action/movieActions'

const MovieForms = (props) => {
  const [name,setName] = useState('')
  const [rank,setRank] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const attr = e.target.name
    if(attr === 'name'){
      setName(e.target.value)
    }else if(attr === 'rank'){
      setRank(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      id : Number(new Date()),
      name : name,
      rank : rank
    }

    dispatch(addMovie(formData))
    setName('')
    setRank('')
  }
  return(
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} name="name" placeholder="Enter movie name"/><br/>
        <input type="text" value={rank} onChange={handleChange} name="rank" placeholder="IMDB Ranking"/><br/>

        <input type="submit" value="Add"/>
      </form>
    </div>
  )
}

export default MovieForms