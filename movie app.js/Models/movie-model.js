const createMovie = (movie)=>{
    return{
        title:movie.title,
        overview:movie.overview,
        backdrop_path:movie.backdrop_path,
    }
}
Module.exports = createMovie;
