// Your code here
window.addEventListener("load", function () {
	changeText();
	changeYellow();
	changeClass();
	reset();

});



function changeText()
{
	document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";
}


function changeYellow ()
{
var items = document.getElementsByTagName("li");
console.log("items", items);
for (var i = 0; i < items.length; i++) {
	var listItem = items[i];
	listItem.style.backgroundColor = "yellow";
	console.log("listItem", listItem);
	var list;
}}



 function changeClass ()
 {

var essentials = document.getElementsByTagName("li");
for (var i = 0; i < essentials.length; i++) {
	essentials[i].addEventListener("click", makeSelected);
}}

function makeSelected(event) { //function that makes it selected
	console.log("event", event);
	event.target.className = "selected"; //changing targeted event's class to "selected"
	document.querySelector("img").setAttribute ("src", "./images/" + event.target.innerHTML + ".jpeg");
} // Selecting the image and changinging it.

//

// function reset () {
//  		console.log("hello");
//  		var loop2var = document.getElementsByTagName("li");
// 	for (var z = 0; z < loop2var.length; z++) {
// 			loop2var[z] {
// 			loop2var[z].className = "reset";
// 		}
// }}
// document.getElementById("reset").addEventListener("click", reset);
// document.querySelector("img").setAttribute("src", "./images/panic.jpeg");





//event.target.document.getElementsByTagName("li")

//.className += "Selected";
    	//var selectedlines = document.getElementsByClassName("Selected");
    	//selectedlines.addEventListener("click");


