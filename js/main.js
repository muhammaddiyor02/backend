let elList = document.querySelector('.list')

let elAdd = document.querySelector('.add')
let elUpdate = document.querySelector('.upda')
let elDelete = document.querySelector('.delete')



fetch('https://63dff4d58b24964ae0f75802.mockapi.io/book')
.then((res)=> res.json())
.then((data)=> mapping(data))

function mapping(data){
    data.forEach((item) =>{
        console.log(data)
        let newLi = document.createElement('li')
        newLi.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${item.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h2 class="card-title">${item.name}</h2>
    <p class="card-title">${item.price}</p>
    <p class="card-title">${item.id}</p>


    <a href="#" class="btn btn-primary">${item.button}</a>
  </div>
</div>
        `
        elList.appendChild(newLi)
    });
    elUpdate.addEventListener('submit',(e)=>{
e.preventDefault()
console.log(e.target.name_two.value);
console.log(e.target.img_two.value);
console.log(e.target.price_two.value);
let id = e.target.id.value
fetch(`https://63dff4d58b24964ae0f75802.mockapi.io/book/${id}`,{
    method:'PUT',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        name:e.target.name_two.value,
        img:e.target.img_two.value,
        price:e.target.price_two.value,

        })
       
})

.then((res)=> res.json())
.then((data)=> console.log(data))
    })
}
elAdd.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e.target.name.value);
    console.log(e.target.img.value);
    console.log(e.target.price.value);
    
    fetch('https://63dff4d58b24964ae0f75802.mockapi.io/book',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({
            name:e.target.name.value,
            img:e.target.img.value,
            price:e.target.price.value,
    
            })
           
    })
    
    .then((res)=> res.json())
    .then((data)=> console.log(data))
        })
        elDelete.addEventListener('submit',(e)=>{
e.preventDefault();
let id = e.target.id.value
fetch(`https://63dff4d58b24964ae0f75802.mockapi.io/book/${id}`,{
    method:'DELETE',
    headers:{'content-type':'application/json'},
   
       })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
 })