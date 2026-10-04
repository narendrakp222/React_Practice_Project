import { useParams } from "react-router-dom";
import movies from "../data/movies";
function MovieDetails(){
const {id} = useParams()
const movie_1=movies.find((movie)=>movie.id===Number(id));
    return (
        <div>
            <h1>This is movies Detailsr</h1>
            <h2>{movie_1.title}</h2>
            <h2>{movie_1.genre}</h2>
            <h2>{movie_1.rating}</h2>
        </div>
    );

}

export default MovieDetails;