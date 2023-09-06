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
const ansFilms = +prompt("how many films have you watched yet: ", "");
objFilms = {
    count: ansFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const lastFilWatched = prompt("What last film you have watched: ", "")
const grade = +prompt("How do you grade it?: ", "")
objFilms.movies[lastFilWatched] = grade;