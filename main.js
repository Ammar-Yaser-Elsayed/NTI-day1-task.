function Showproduct(){
    var name = document.getElementById("name");
    var price = document.getElementById("price");
    var description = document.getElementById("description");
    var result = document.getElementById("result");
    result.innerHTML += `<br>product name : ${name.value} <br>product price : ${price.value} <br>product Description : ${description.value} <br>`;
    name.value = "";
    price.value = "";
    description.value = "";
}