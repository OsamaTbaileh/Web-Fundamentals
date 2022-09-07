function hidecookies() {
var cookie = document.querySelector(".cookies");
cookie.remove();
}



function alertcityname () {
    alert ("Loading weather report...");   
}



function switchingtemperature (element) {

    console.log(element.value);
    var tempareture = document.querySelectorAll("#tempvalue");

    for (var i=0; i<tempareture.length; i++){
        tempareture[i].innerText= parseInt(tempareture[i].innerText);
        if(element.value =="°F"){
                tempareture[i].innerText= tempareture[i].innerText*1.8+32;
        }
        else {
                tempareture[i].innerText= (tempareture[i].innerText-32)/1.8;
        }
        tempareture[i].innerText= Math.round(tempareture[i].innerText)+"°";
    }
}
