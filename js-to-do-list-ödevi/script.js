const task = document.querySelector("#task")
const button = document.querySelector(".button")
const ul = document.querySelector("#list")


function newElement(){
    if(task.value == ""){
        let errorToast = new bootstrap.Toast(document.querySelector(".error"));
        errorToast.show();
        console.log("hata")
    }else{
        let liDOM = document.createElement("li")
        liDOM.innerHTML = `${task.value}<span class="times close">&times;</span>`
        ul.appendChild(liDOM);
        task.value = "";
        let successToast = new bootstrap.Toast(document.querySelector(".success"));
        successToast.show();
        liDOM.addEventListener("click",function(){
            liDOM.classList.toggle("checked")
        })
        liDOM.addEventListener("click", deleteElement)
    }
    
    saveLocalList(task)
}

function saveLocalList(task){
  let localList;
  if(localStorage.getItem('localList') === null){
      localList = []
  }else{
      localList = JSON.parse(localStorage.getItem('localList'))
  }
  localList.push(task)
  localStorage.setItem('localList', JSON.stringify(localList))
}

function deleteElement(e){
    if(e.target.className === "times close"){
        e.target.parentElement.remove();
    }
}

function getList(){
    let localList;
    if(localStorage.getItem('localList') === null){
        localList = []
    }else{
        localList = JSON.parse(localStorage.getItem('localList'))
    }
    localList.forEach((task) => {
        let liDOM = document.createElement("li")
        liDOM.innerHTML = `${task.value}<span class="times close">&times;</span>`
        ul.appendChild(liDOM);
        task.value = "";
        liDOM.addEventListener("click",function(){
            liDOM.classList.toggle("checked")
        })
    })

}

