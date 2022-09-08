function doSomething(){
    console.log('third');
}

console.log('first');
console.log('second');
const timeoutId = setTimeout(()=>{console.log('third')}, 5000);
// let urlAsync = ()=>{
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => { 
//     console.log('response received'); 
//     return response.json();
// })
//   .then(json => console.log(json))
// }
// urlAsync()
doSomething();
console.log('fourth');
console.log('fifth');