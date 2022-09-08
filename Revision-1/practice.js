// 1 work
// console.log('one');
// setTimeout(function(){
//     console.log('I am coming after 3.5 seconds')
// },3500)
// console.log('two');

// // 2 work
// let userinput = parseFloat(prompt('please your give your number'));
// let add = userinput + 250;
// alert(add);

// 3rd work
    // what is cookies? write an english at least 5-7 lines

// 4th work
    // write at least 3 difference between local-storage and session-storage?

// 5th
    // write defference cookies,local-stroage,session-storage

// 6th 
    // what is event loop in javascript?

// 7th
    // Tell me 4 things that is synchoronous in javascript?


/* ======================================================================
Practices tasks for local storage level -1
===============================================================================*/
// 1 work
// localStorage.clear()

// // 2nd work
// let setLocalStorageNameAge= ()=>{
//     localStorage.setItem('name','sakib-khan');
//     localStorage.setItem('age',40);
// }

// // 3rd and 4th
// let showAge = ()=>{
//     setLocalStorageNameAge()
//     let ageValue = localStorage.getItem('age');
//     console.log(ageValue)
//     alert(ageValue)
// }

// // 5th
// let localRemoveStorage = ()=>{
//     localStorage.removeItem('name');
//     localStorage.removeItem('age')
// }
// // 6th 

// let obj = {
//     firstName : 'Abraham',
//     lastName : 'linkon'
// }

// let setObjInLocalStorage = ()=>{
//     let objString = JSON.stringify(obj);
//     localStorage.setItem('fullName',objString)
// }
let z = localStorage.getItem('value');
if(z === null){
    localStorage.setItem('value',0);
}
let pvalueSelect = document.getElementById('pValue');
let increase = ()=>{
    let pValueText = pvalueSelect.innerText;
    let pvalueNum = parseInt(pValueText);
    pvalueNum = pvalueNum + 1;
    pvalueSelect.innerText = pvalueNum;
    localStorage.setItem('value',pvalueNum);
}
pvalueSelect.innerText = z;