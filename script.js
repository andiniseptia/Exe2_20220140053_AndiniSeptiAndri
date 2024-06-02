function submitForm() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var product = document.getElementById("product").value;
    
    var message = "Order Details:\n\n";
    message += "Name: " + name + "\n";
    message += "Address: " + address + "\n";
    message += "Phone: " + phone + "\n";
    message += "Product: " + product;
    
    alert(message);
}
