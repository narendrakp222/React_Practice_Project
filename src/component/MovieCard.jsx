function MovieCard({movie}){


    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>{movie.rating}</p>
        </div>
    );


}
export default MovieCard;