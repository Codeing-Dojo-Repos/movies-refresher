import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = props => {

    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect( () => {
        axios.get(`http://localhost:8000/api/movies/${id}`)
            .then( res => {
                setTitle(res.data.title)
                setGenre(res.data.genre)
            })
            .catch( err => {
                console.log(err)
            })
    }, [])

    const editHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/movies/${id}`, { title, genre})
        .then( res => {
            console.log(res)
            navigate('/')
        })
        .catch( err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>Edit Movie</h1>
            Edit
            <form onSubmit={editHandler}>

                <label>Title</label>
                <input type="text" onChange={ (e) => setTitle(e.target.value)} value={title} />

                <label>Genre</label>
                <input type="text" onChange={ (e) => setGenre(e.target.value)} value={genre}/>
                
                <button>Edit</button>

            </form>
        </div>
    )
}
export default Edit