const task = document.querySelector("#task")
const button = document.querySelector(".button")
const ul = document.querySelector("#list")


function newElement(){
    let item = task.value
    if(task.value == ""){
        let errorToast = new bootstrap.Toast(document.querySelector(".error"));
        errorToast.show();
        console.log("hata")
    }else{
        let liDOM = document.createElement("li")
        liDOM.innerHTML = `${item}<span class="times close">&times;</span>`
        ul.appendChild(liDOM);
        task.value = "";
        let successToast = new bootstrap.Toast(document.querySelector(".success"));
        successToast.show();
        liDOM.addEventListener("click",function(){
            liDOM.classList.toggle("checked")
        })
        liDOM.addEventListener("click", deleteElement)
    }
    saveLocalList(item)
}

function saveLocalList(item){
  let localList;
  if(localStorage.getItem('localList') === null){
       localList = []
   }else{
       localList = JSON.parse(localStorage.getItem('localList'))
   }
  localList.push(item)
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
    localList.forEach((item) => {
        let liDOM = document.createElement("li")
        liDOM.innerHTML = `${item}<span class="times close">&times;</span>`
        ul.appendChild(liDOM);
        task.value = "";
        liDOM.addEventListener("click",function(){
            liDOM.classList.toggle("checked")
        })
    })

}


