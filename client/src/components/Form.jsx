import React, {useState} from 'react'
import axios from 'axios'

const Form = props => {

    const { movieList, setMovieList } = props;

    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/movies', 
        {
            title,
            genre
        })
        .then( (res) => {
            console.log(res)
            setMovieList([...movieList, res.data])
            setTitle('')
            setGenre('')
        })
        .catch( (err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>Add Movie</h1>
            Form
            <form onSubmit={submitHandler}>

                <label>Title</label>
                <input type="text" onChange={ (e) => setTitle(e.target.value)} />

                <label>Genre</label>
                <input type="text" onChange={ (e) => setGenre(e.target.value)} />
                
                <button>Create</button>

            </form>
        </div>
    )
}
export default Form