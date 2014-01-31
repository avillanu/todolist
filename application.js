var counter = 1;

function deleteItem (item) {
alert(item);
}

function addResults (form) {
results = form.inputbox.value;
var title = 'div' + counter;
counter++;
var div = document.createElement("div");
div.id = title;
div.style.width = "300px";
div.style.height = "30px";
div.style.color = "black";
div.innerHTML = results;
document.getElementById('unchecked').appendChild(div);

var button = document.createElement("input");
	var buttonid = 'button' + counter;
	button.id = title;
    button.type = "button";
    button.counter = counter;
    button.value = "check off";
    button.onclick = function(){
    div.style.setProperty("text-decoration","line-through");
    document.getElementById('checked').appendChild(div);
   var elem = document.getElementById(title);
    elem.parentNode.removeChild(elem);
    $(this).remove();
    };


document.getElementById('unchecked').appendChild(button);
};