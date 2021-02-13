var myArray = ["Allensbach.jpg", "Konstanz.jpg", "Uberlingen.jpg", "Bregenz.jpg"];
var i = 1;

function back(id) {
    var img = document.getElementById(id);

    (i == 0) ? i = 3 : i--;

    img.src = "img//" + myArray[i];
}

function forward(id) {
    var img = document.getElementById(id);

    (i == 3) ? i = 0 : i++;

    img.src = "img//" + myArray[i];
}
