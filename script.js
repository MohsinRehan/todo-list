let inputUser = document.getElementById("myInput");
let addBtn = document.getElementById("add-btn");
let updateBtn = document.getElementById("update-btn");
let addListitem = document.getElementById("add-item");
let updateIndex="";

addBtn.addEventListener("click", function () {
    if (inputUser.value != 0) {
      let addList = JSON.parse(localStorage.getItem("localData")) || [];
      addList.push(inputUser.value);
      inputUser.value = "";
      localStorage.setItem("localData", JSON.stringify(addList));
     
    }
    displayList();

});

updateBtn.addEventListener("click", function () {
    if (inputUser.value != 0) {
        let addList = JSON.parse(localStorage.getItem("localData")) || [];
        addList[updateIndex] = inputUser.value;
        localStorage.setItem('localData', JSON.stringify(addList))
        inputUser.value = ''
        addBtn.style.display='inline-block';
        updateBtn.style.display='none';
      }
    displayList();

});


function displayList() {
    let getData = JSON.parse(localStorage.getItem('localData')) || [];

    let html = "";
    addListitem.innerHTML = "";
   getData.map((item, index) => {
        html += `
        <li class="newCreateitem">
        <p>
        ${item}
        </p>
        <a onclick='updateItem(${index})' class="edit-btn">Edit</a><a onclick='deleteItem(${index})' class="update-btn">Delete</a></li>`; 
        addListitem.innerHTML=  html;

    });
}

function deleteItem(index){
    let getData=JSON.parse(localStorage.getItem('localData')) || [];
    getData.splice(index , 1)
    localStorage.setItem("localData", JSON.stringify(getData));
    displayList();
}

function updateItem(index){
    addBtn.style.display='none';
    updateBtn.style.display='inline-block';
    let editData =JSON.parse(localStorage.getItem('localData')); 
    let updateData=editData.splice(index , 1 , inputUser.value); 
    updateIndex = index;
    inputUser.value=updateData;
    displayList(updateData);
}

(function () {
    displayList();
  })();