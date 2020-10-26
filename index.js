var colors = ["#00B0F0" , "white", "#FFC000", "red", "blue" , "green", "gray","pink","yellow"];
var check=false;

document.querySelector(".btn").addEventListener("click", function(){
check=false;
var h;
for (h = 0; h < 9; h++) {document.querySelectorAll(".hhh")[h].style.visibility = "visible";}


var  colorind =[];
var i;
  for (i = 0; i < 9; i++) {
      var num = Math.random()*9 +1;
      num= Math.floor(num);
      document.querySelectorAll(".hhh")[i].textContent=num;
      var sr=".numBlock"+(i+1)+"";
  var indCol;
      while(true){
      indCol = Math.random()*9 ;
      indCol= Math.floor(indCol);
      if(!colorind.includes(indCol)) { colorind.push(indCol); break;}
      }

      document.querySelector(sr).style.backgroundColor= colors[indCol];

  }
 });




var nums=[];
document.querySelector(".btn2").addEventListener("click", function(){
nums=[];
check=true;
  var i;
  for (i = 0; i < 9; i++) {
      var sr=".numBlock"+(i+1)+"";
      document.querySelector(sr).style.backgroundColor= "#B4C7E7";
  }

});

document.querySelector(".numBlock1").addEventListener("mouseover",function (){
if (check && document.querySelectorAll(".hhh")[0].style.visibility != "hidden") {
  document.querySelectorAll(".hhh")[0].style.visibility = "hidden";
  nums.push(document.querySelectorAll(".hhh")[0].textContent);
  if (nums.length==9) alert(nums);
}});

document.querySelector(".numBlock2").addEventListener("mouseover",function (){
if (check && document.querySelectorAll(".hhh")[1].style.visibility != "hidden") {
  document.querySelectorAll(".hhh")[1].style.visibility = "hidden";
  nums.push(document.querySelectorAll(".hhh")[1].textContent);
if (nums.length==9) alert(nums);
}});


document.querySelector(".numBlock3").addEventListener("mouseover",function (){
if (check&& document.querySelectorAll(".hhh")[2].style.visibility != "hidden") {
  document.querySelectorAll(".hhh")[2].style.visibility = "hidden";
  nums.push(document.querySelectorAll(".hhh")[2].textContent);
  if (nums.length==9) alert(nums);
}});


document.querySelector(".numBlock4").addEventListener("mouseover",function (){
if (check && document.querySelectorAll(".hhh")[3].style.visibility != "hidden") {
  document.querySelectorAll(".hhh")[3].style.visibility = "hidden";
  nums.push( document.querySelectorAll(".hhh")[3].textContent);
  if (nums.length==9) alert(nums);
}});


document.querySelector(".numBlock5").addEventListener("mouseover",function (){
if (check && document.querySelectorAll(".hhh")[4].style.visibility != "hidden") {
  document.querySelectorAll(".hhh")[4].style.visibility = "hidden";
  nums.push(document.querySelectorAll(".hhh")[4].textContent);
  if (nums.length==9) alert(nums);
}});



document.querySelector(".numBlock6").addEventListener("mouseover",function (){
if (check && document.querySelectorAll(".hhh")[5].style.visibility != "hidden") {
  document.querySelectorAll(".hhh")[5].style.visibility = "hidden";
  nums.push( document.querySelectorAll(".hhh")[5].textContent);
  if (nums.length==9) alert(nums);
}});


document.querySelector(".numBlock7").addEventListener("mouseover",function (){
if (check && document.querySelectorAll(".hhh")[6].style.visibility != "hidden") {
  document.querySelectorAll(".hhh")[6].style.visibility = "hidden";
  nums.push(document.querySelectorAll(".hhh")[6].textContent);
  if (nums.length==9) alert(nums);
}});



document.querySelector(".numBlock8").addEventListener("mouseover",function (){
if (check && document.querySelectorAll(".hhh")[7].style.visibility != "hidden" ) {
  document.querySelectorAll(".hhh")[7].style.visibility = "hidden";
  nums.push(document.querySelectorAll(".hhh")[7].textContent);
  if (nums.length==9) alert(nums);
}});


document.querySelector(".numBlock9").addEventListener("mouseover",function (){
if (check && document.querySelectorAll(".hhh")[8].style.visibility != "hidden") {
  document.querySelectorAll(".hhh")[8].style.visibility = "hidden";
  nums.push( document.querySelectorAll(".hhh")[8].textContent);
  if (nums.length==9) alert(nums);
}});
