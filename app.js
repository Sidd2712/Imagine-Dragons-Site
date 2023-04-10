var userList=document.querySelector(".list")
var listInput=document.querySelector(".input_1")
var addList=document.querySelector(".btn")

addList.addEventListener('click',function(){
    const newLi=document.createElement("li")
    const liContent=document.createTextNode(listInput.value)
    newLi.appendChild(liContent)
    userList.appendChild(newLi)
})