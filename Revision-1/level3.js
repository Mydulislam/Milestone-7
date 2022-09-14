let getInputValue = (id)=>{
    let selectInput = document.getElementById(id);
    let inputFieldValue = selectInput.value;
    if(inputFieldValue === ''){
        alert('please fill up');
        return ;
    }
    return inputFieldValue;
}
document.getElementById('add-name').addEventListener('click',function(){
    let inputValue = getInputValue('name-field');
    if(inputValue){
        setLocalStrorageData(inputValue);
    }
    display()
})

const getLocalStorageData = (item)=>{
    const data = localStorage.getItem(item);
    const parseData = JSON.parse(data);
    return parseData;

}
const setLocalStrorageData = (item) =>{
    let data = getLocalStorageData('names');
    // console.log(data);
    if(!data){
        data = [];
    }
    if(data){
        data.push(item)
    }
    localStorage.setItem('names',JSON.stringify(data));
}
setLocalStrorageData();
const display = ()=>{
    const names = getLocalStorageData('names');
    console.log(names)
    const tableBody = document.getElementById('body');
    tableBody.textContent = '';
    for(let name of names){
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <tr>
                <td>${name}</td>
            </tr>
        `
        tableBody.appendChild(tr);
    }
}
display()



document.getElementById('reset').addEventListener('click',function(){
    localStorage.clear();
})
