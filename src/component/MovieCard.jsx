import { Link } from "react-router-dom";
function MovieCard({movie}){


    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>{movie.rating}</p>
            <Link to={`/movies/${movie.id}`}>View Details</Link>
        </div>
    );


}
export default MovieCard;