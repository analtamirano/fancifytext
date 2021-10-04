

function helloAlert () {
  var elem=document.getElementById('inputText');
  elem.style.fontSize="24px";

}

function changeStyle(){
  if(document.getElementById('fancy').checked) {
    var elem=document.getElementById('inputText');
     elem.style.fontWeight="bold";
     elem.style.color="blue";
     elem.style.textDecoration="underline";
}else if(document.getElementById('boring').checked) {
  var elem=document.getElementById('inputText');
   elem.style.fontWeight="normal";
   elem.style.color="black";
   elem.style.textDecoration="none";
}
}

function mooChange(){
  document.getElementById("inputText").value = document.getElementById("inputText").value.toUpperCase();
  var str = document.getElementById("inputText").value;
  var parts = str.split(".");
  str = parts.join("-moo.");
  document.getElementById("inputText").value=str;
  }
