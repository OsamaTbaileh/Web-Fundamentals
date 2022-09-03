var x = document.querySelector("#likes");
var counter =3
function increase(){
    x.innerText= (counter+1)+" like(s)";
    counter=counter+1;
}
