let getInputValue = (id)=>{
    let inputFiled = document.getElementById(id);
    let inputFieldValue = inputFiled.value;
    inputFiled.value = "";
    return inputFieldValue;
}
document.getElementById('btn').addEventListener('click',function(){
    let inputFieldName = getInputValue('name')
    let inputFieldAge = getInputValue('age')
    setLocalStorage(inputFieldName,inputFieldAge);
    sendItemToShow(inputFieldName,inputFieldAge);
})
let checkItem = ()=>{
    let checkItem = localStorage.getItem('cart');
    let cart = {};
    if(checkItem){
        cart = JSON.parse(checkItem);
    }
    return cart;
}
let setLocalStorage = (key,value)=>{
    let cart = checkItem();
    cart[key] = value;
    let getItemString = JSON.stringify(cart)
    localStorage.setItem('cart',getItemString);
}

let showInHtmlPage = (key,value)=>{
    let ulAreaSelect = document.getElementById('list');
    let createLi = document.createElement('li');
    createLi.innerText = `${key} : ${value}`;
    ulAreaSelect.appendChild(createLi)
}

let sendItemToShow = ()=>{
    let cart = checkItem();
    for(let item in cart){
        let itemValue = cart[item];
        showInHtmlPage(item,itemValue)
    }
}

sendItemToShow()
