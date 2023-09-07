const ansFilm = +prompt("how many films have you watched yet: ", "");
objFilms = {
    count: ansFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let lastFilWatched = '';
let grade = 0;
while (grade <= 0 || lastFilWatched.length <= 0 || lastFilWatched.length >= 50){
    for(let i = 0; i <= ansFilm - 1; i++){
        lastFilWatched = prompt("What last film you have watched: ", "")
        grade = +prompt("How do you grade it?: ", "")
    
        objFilms.movies[lastFilWatched] = grade;
    }
}

const ansFilms = +prompt("Сколько фильмов вы смотрели");
if(ansFilms < 10){
    alert("мало фильмов");
} else if(ansFilms >= 10 && ansFilms <= 20) {
    alert("вы обычный зритель");
}
else{
    alert("вы настоящий киноман!");
}
const genres = [];
function writeYourGenres(){
    for(let i = 0; i <= 2; i++){
        genres[i] = prompt(`your favourite genre number ${i + 1}`)
    }
}
writeYourGenres();
console.log(genres)
function showMyDB () {
    if(objFilms.privat === false){
        console.log(objFilms.movies)
    } else {
        console.log("i can't show it")
    }
}
showMyDB();