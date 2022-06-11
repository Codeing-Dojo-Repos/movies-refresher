
import React, {useState, useEffect} from 'react'

import Form from '../components/Form'
import Display from '../components/Display'

const Main = props => {
    const [movieList, setMovieList] = useState([])

    return(
        <div>
            <Display movieList={movieList} setMovieList={setMovieList} />
            <Form movieList={movieList} setMovieList={setMovieList} />
        </div>
    )
}
export default Main