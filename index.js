const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const ul_element = document.getElementById("ul");




function addingTask(){
  if(inputBox.value === ""){
    alert("Please write some task..")
  }else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ul_element.appendChild(li);

    let span = document.createElement("span");
    // let img = document.createElement("img");
    // img.src = "assets/delete1.png";
    span.innerHTML = "x";
    li.appendChild(span);

    let edit_btn = document.createElement("button");
    edit_btn.innerHTML = "Edit task";
    li.appendChild(edit_btn)


   console.log(ul_element)
  }
  inputBox.value = "";
}


// adding two conditions one fr delete and another for completed task



ul_element.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();

  }else if(e.target.tagName === "BUTTON" &&  e.target.classList.toggle("edit-btn")){
    const listItem = e.target.parentElement;
    const currentText = listItem.childNodes[0].textContent.trim();
    const editedText = prompt('edit your text : ', currentText);
    if(editedText){
      listItem.childNodes[0].textContent = editedText;
        }
    
    }
  
  false;
}
)

function updateDate() {
  const dateContainer = document.getElementById('date');
  const now = new Date();
  const formattedDate = now.toDateString(); 
  dateContainer.innerText = formattedDate;
}

document.addEventListener('DOMContentLoaded', updateDate);