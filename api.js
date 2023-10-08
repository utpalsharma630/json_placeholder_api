function loadData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => dataDetails(data))
}
const dataDetails = ( comments) =>{
    const content = document.getElementById('content')
    
    comments.forEach(comment => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <h2>${comment.id}</h2>
        <h2>${comment.name}</h2>
        <h2>${comment.email}</h2>
        <button onclick="seemore(${comment.id})">See more </button>
        `
        content.appendChild(div);
    });
}

const div = document.createElement('div')
function seemore(id){
    const details = document.getElementById('details')
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(res => res.json())
    // .then(data=> console.log(data))
    .then(data => {
        
        div.innerHTML=`
        <h2>${data.postId}</h2>
        <h2>${data.id}</h2>
        <h2>${data.name}</h2>
        <h2>${data.email}</h2>
        <h2>${data.body}</h2>
        `
        details.appendChild(div)
    })
    
}
loadData()