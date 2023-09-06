// const bodyElement = document.body;
// const firstChildNode = bodyElement.first Child;
// const lastChildNode = bodyElement.lastChild;
// const childNodes = bodyElement.childNodes;
// console.log(firstChildNode)
// console.log(lastChildNode)
// console.log(childNodes)
// for(let node of childNodes){
//     console.log(node)
// }
// const a = bodyElement.getElementsByClassName("h1")
// console.log(a)
// const a1 = a.outerHTML;
// console.log(a1)
// let i = 0
// let a = 123124
// for(let i = 0; a != 0; i++){
//     a--;
//     console.log(a)
// }
// let doc = document.body;
// console.log(doc.querySelectorAll('ul > li'))
// let number = 0
// console.log(number)
// obj = {
//     1: 3,
//     2: 2,
//     3: 1,
// }
// console.log(obj)
// obj = {

// }
// obj['name'] = prompt("your name: ", "")
// obj['surname'] = prompt("your surname: ", "")
// obj['age'] = +prompt("your age: ")
// console.log(obj)
// let a = 0
// let b = 0
// console.log(a, b)
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
if(ansFilm > 0){
    while (grade <= 0 || lastFilWatched.length <= 0 || lastFilWatched.length >= 50){
        for(let i = 0; i <= ansFilm; i++){
            lastFilWatched = prompt("What last film you have watched: ", "")
            grade = +prompt("How do you grade it?: ", "")
    
            objFilms.movies[lastFilWatched] = grade;
        }
    }
}
else{
    const ansFilms = +prompt("Сколько фильмов вы смотрели");
    if(ansFilms < 10){
        alert("мало фильмов");
    } else if(ansFilms >= 10 && ansFilms <= 20) {
        alert("вы обычный зритель");
    }
    else{
        alert("вы настоящий киноман!");
    }
}
objFilms.movies[lastFilWatched] = grade;
// const num = +prompt("input num", "")
// // console.log(1!=1 ? "hello" : 'zalupa')
// switch (num) {
//     case 1:
//         console.log(1)
//         break;
//     case 2:
//         console.log(2)
//         break;
//     case 3:
//         console.log(3)
//         break;
//     case 4:
//         console.log(4)
//         break;
//     case 5:
//         console.log(5)
//         break;
// }
// let fries = false
// let hamburger = true
// console.log(fries && hamburger ? "fries and hamburger" : fries == true ? "fries" : "hamburger")
// console.log( 5 === 5 && 3 > 1 || 5
// num = 0;
// while( num <= 10 ){
//     console.log(num);
//     num++;
// }
// let res = '';
// for(let i = 1; i <= 10; i++){
//     for(let j = 0; j < i; j++){
//         res += '*'
//     }
//     res += '\n'
// }
// console.log(res)
