import React, {useEffect} from 'react'
import axios from 'axios'
//import https from 'https'
import {Link} from 'react-router-dom'

const Display = props => {

    const {movieList, setMovieList } = props

    useEffect( () => {
        axios.get('http://localhost:8000/api/movies')
            .then( (res) => {
                console.log(res.data)
                setMovieList(res.data)
            })
            .catch( (err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/movies/${id}`)
            .then( (res) => {
                let filterList = movieList.filter(  (movie) => { return movie._id !== id})
                setMovieList(filterList)
            })
            .catch( err =>{
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Display Movie</h1>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                   { 
                        movieList.map( (movie, index) => {
                            return(
                            <tr>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>
                                    <Link to={`/edit/${movie._id}`}>Edit</Link>
                                    <button onClick={ ()=> deleteHandler(movie._id) } >Delete</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Display