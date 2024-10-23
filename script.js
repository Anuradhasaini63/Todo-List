
let task_count = 0;

function addTask(){
    let task_val = document.getElementById("task").value;
    let display_list = document.getElementById("dis_list");

    task_count++;

    let display_items = document.createElement("div");
    display_items.classList.add("drag_item");
    display_items.setAttribute("draggable", "true");
    display_items.setAttribute("id", "task_" + task_count);
    display_list.setAttribute("ondragstart", "drag(event)");

    let display_text = document.createElement("p");

    display_text.innerHTML = task_val;
    display_items.append(display_text);
    display_list.append(display_items);

    document.getElementById("task").value = "";
}


function allowDrop(ev){
        ev.preventDefault();
    }
    function drag(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }
    function drop(ev){
      ev.preventDefault();
      var data =  ev.dataTransfer.getData("text");
        var draggableEelement = document.getElementById(data);
        ev.target.appendChild(draggableEelement);
    }