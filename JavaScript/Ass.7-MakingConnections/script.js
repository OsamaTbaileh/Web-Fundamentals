var disappeartodd = document.querySelector(".card-list-item");
var disappearphil = document.querySelector(".card-list-item2");

var requestsnumber = document.querySelector(".requestsnumber");
var connectionsnumber = document.querySelector(".connectionsnumber");

var counterofrequests = 2;
var counterofconnections = 500;




function accepttodd() {
    disappeartodd.remove();
    counterofrequests -= 1;
    requestsnumber.innerText = counterofrequests;

    counterofconnections +=1;
    connectionsnumber.innerText = counterofconnections;
}

function refusetodd() {
    disappeartodd.remove();
    counterofrequests -= 1;
    requestsnumber.innerText = counterofrequests;
}



function acceptphil() {
    disappearphil.remove();
    counterofrequests -= 1;
    requestsnumber.innerText = counterofrequests;

    counterofconnections +=1;
    connectionsnumber.innerText = counterofconnections;
}

function refusephil() {
    disappearphil.remove();
    counterofrequests -=1 ;
    requestsnumber.innerText= counterofrequests;
}




var jane = document.querySelector(".card-body h1")
function changename() {
    jane.innerText = "Nilson Mandilla";
}

