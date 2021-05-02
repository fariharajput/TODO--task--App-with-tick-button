const addInput = document.querySelector('.add');
const list = document.querySelector('.list');
const search = document.querySelector('.search')
const checkedList = document.querySelector('.checked-list')
const reverse = document.querySelector('.checked-list');



addInput.addEventListener('submit',(e) =>{
    e.preventDefault();
    const valueOfInput = addInput.addIn.value.trim();
    if(valueOfInput.length){
        addTask(valueOfInput);
    }
    addInput.reset();
    

})

const addTask = (valueOfInput) =>{

    list.innerHTML += 
    `<div class="list-item d-flex justify-content-between align-items-center my-1">
    <li
      class="list-group-item d-flex justify-content-between align-items-center "
    ><div>
      <span>${valueOfInput}</span>
    </div>
      <i class="fas fa-trash-alt delete mx-1"></i>
    </li>
    <i class="fas fa-check-circle check mx-2"></i>
    </div>`
}

list.addEventListener('click' ,(e) =>{
    
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
    else if(e.target.classList.contains('check')){
        e.target.parentElement.remove();
        checkedList.innerHTML +=
        `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span style="text-decoration:line-through;">${e.target.parentElement.textContent}</span>
        <i class="fas fa-reply reverse"></i>
        </li>`

    }
})
reverse.addEventListener('click', e => {
    if(e.target.classList.contains('reverse')){
        e.target.parentElement.remove();

        list.innerHTML +=
        `<div class="list-item d-flex justify-content-between align-items-center my-1">
    <li
      class="list-group-item d-flex justify-content-between align-items-center "
    ><div>
      <span>${e.target.parentElement.children[0].textContent}</span>
    </div>
      <i class="fas fa-trash-alt delete mx-1"></i>
    </li>
    <i class="fas fa-check-circle check mx-2"></i>
    </div>`
    }
})



search.addEventListener('keyup',() =>{
    const searchValue = search.search.value.toLowerCase().trim();
    filtering(searchValue);

})


const filtering = (searchValue) =>{
    const listArray = Array.from(list.children);
    listArray.filter(listItems => !listItems.textContent.toLowerCase().includes(searchValue)).forEach(item => item.classList.add('filtered'))

    listArray.filter(listItems => listItems.textContent.toLowerCase().includes(searchValue)).forEach(item => item.classList.remove('filtered'))
}

