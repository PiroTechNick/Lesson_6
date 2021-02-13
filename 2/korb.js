var b1 = {
    name: "Пиво \"Жигулевское\" ",
    price: 75
};

var b2 = {
    name: "Пиво немецкое нефильтрованное ",
    price: 85
};

var b3 = {
    name: "Пиво \"Бархатное\" ",
    price: 79
};

var b4 = {
    name: "Пиво темное ",
    price: 90
};

var b5 = {
    name: "Пиво \"Weizen Deutsch\" ",
    price: 105
};

var itemsArray = [b1, b2, b3, b4, b5];

var sum = 0;

function init() {
    var catalog = document.getElementsByClassName("catalog")[0];
    var b, item;
    for (b = 0; b < itemsArray.length; b++) {
        item = document.createElement("div");
        item.setAttribute("class", "div_item");
        item.appendChild(document.createTextNode(itemsArray[b].name));

        itemImage = document.createElement("img");
        itemImage.src = itemsArray[b].imgSrc;

        item.appendChild(document.createTextNode(itemsArray[b].price + "\u0024"));

        itemButton = document.createElement("button");
        itemButton.textContent = "Купить";
        itemButton.setAttribute("id", "btn_" + b);
        itemButton.onclick = addItem;
        item.appendChild(itemButton);

        catalog.appendChild(item);
    }
}

function addItem(obj) {

    var selectedItem = itemsArray[obj.target.id.split("_")[1]];
    var selectedItems = document.getElementsByClassName("selected_items")[0];
    var tr = selectedItems.insertRow(-1);
    var td = tr.insertCell(-1);
    td.appendChild(document.createTextNode(selectedItem.name));
    var td = tr.insertCell(-1);
    td.appendChild(document.createTextNode("    " + selectedItem.price + "\u0024"));

    sum += selectedItem.price;
    document.getElementsByClassName("sum")[0].textContent = "Общая стоимость: " + sum + "\u0024";
}
window.onload = init;