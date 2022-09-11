let getInputValue = (id)=>{
    let selectInput = document.getElementById(id);
    let inputFieldValue = selectInput.value;
    if(inputFieldValue === ''){
        alert('please fill up');
        return JSON.stringify({});
    }
    return inputFieldValue;
}
document.getElementById('delete-name').addEventListener('click',function(){
    localStorage.removeItem('name')
})
document.getElementById('add-name').addEventListener('click',function(){
    let inputValue = getInputValue('name-field');
    localStorage.setItem('name',inputValue);
})
document.getElementById('delete-email').addEventListener('click',function(){
    localStorage.removeItem('email');
})
document.getElementById('add-email').addEventListener('click',function(){
    let inputValue = getInputValue('email-field');
    localStorage.setItem('email',inputValue);
})
document.getElementById('delete-message').addEventListener('click',function(){
    localStorage.removeItem('email');
})
document.getElementById('add-message').addEventListener('click',function(){
    let inputValue = getInputValue('message-field');
    localStorage.setItem('message',inputValue);
})

document.getElementById('reset').addEventListener('click',function(){
    localStorage.clear();
})
