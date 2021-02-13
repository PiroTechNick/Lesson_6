function veranderung(id) {
    var k = document.getElementById(id);
    var v = k.src.replace('kleine', 'gross');
    console.log(v);
    var n = document.getElementById("gross");
    n.src = v;
}

function imgError() {
    alert('Для этого изображения нет большой картинки');
}