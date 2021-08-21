const APIKEY= "f8072dece177cc74f471c4644654783c";

const requests={
    fetchtrending:`/trending/all/week?api_key=${APIKEY}&language=en-us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`,
    fetchAnimationMovies:`/discover/movie?api_key=${APIKEY}&with_genres=16`,
}

export default requests