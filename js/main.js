var subheaders = document.querySelectorAll(".sub-header");
for (var i = 0; i < subheaders.length; i++){
    subheaders[i].textContent = "Hello world";
}

var subsubheaders = document.querySelectorAll("th");
for (var i = 0; i < subsubheaders.length; i++){
    subsubheaders[i].textContent = "iRobot";
}

var foos = document.querySelectorAll("td");
for (var i = 0; i < foos.length; i++){ 
    if(i%2 == 1){
        foos[i].textContent = "million dollar baby";
    }
}