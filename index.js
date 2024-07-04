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