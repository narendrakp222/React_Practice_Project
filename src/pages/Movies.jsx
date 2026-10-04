import movies from "../data/movies"
import MovieCard from "../component/MovieCard";
function Movies(){
    return (

        <div>
            <h1> Movies </h1>
{
    movies.map((movie)=>(
        <MovieCard key={movie.id} movie={movie} />
    ))
}

        </div>
    );


}

export default Movies;