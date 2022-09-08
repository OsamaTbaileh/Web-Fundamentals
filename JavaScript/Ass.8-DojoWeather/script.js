function hidecookies() {
var cookie = document.querySelector(".cookies");
cookie.remove();
}



function alertcityname () {
    alert ("Loading weather report...");   
}



function switchingtemperature (element) {

    console.log(element.value);
    var tempareture = document.querySelectorAll(".tempvalue");

    for (var i=0; i<tempareture.length; i++){
        let degree= parseInt(tempareture[i].innerText);
        if(element.value =="°F"){
                degree= degree*1.8+32;
        }
        else {
                degree= (degree-32)/1.8;
        }
        tempareture[i].innerText= Math.round(degree)+"°";
    }
}
