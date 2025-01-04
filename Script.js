const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

const addTask = () => {
    if (inputBox.value === ''){
        alert("Input field is empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        
    }
    inputBox.value = ''
    savedata();

}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        savedata();

    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
}), false;

const savedata = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showlist = () =>{
    listContainer.innerHTML = localStorage.getItem("data");
}
showlist();