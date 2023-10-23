/*eslint-env browser*/
/*jslint-env browser*/

function display() {
    "use strict";
    document.write("Welcome to The Product Inventory Management System");
    document.write("");
    document.write("COMMAND MENU");
    document.write("show - Show all the commands")
    document.write("view - To view existing inventory");
    document.write("update - Update an existing products inventory");
    document.write("exit - Exit from system");
    document.write("");
}
function view(inventory) {
    "use strict";
    inventory.forEach(function (product) {
        document.write(product[0] + " " + product[1] + " (" + product[2] + ")" + " $" + product[3]);
    });
    document.write("");
}

function update(inventory){
    "use strict";
    var foundSku = false;
    var quantityUpdated = false;
    var skuNumber = parseInt(window.prompt("Enter the sku number of the product"), 10);
    inventory.forEach(function (product){
        if(product[0] === skuNumber){
            foundSku = true;
            while(!quantityUpdated){
                var quantity = parseInt(window.prompt("Enter the new quantity"), 10);
                if(!isNaN(quantity)) {
                    product[2] = quantity;
                    document.write("Quantity updated successfully")
                    quantityUpdated = true;
                }else {
                    document.write("Please enter a valid number as quantity");
                    document.write.log("");
                }
            }
        }  
    });
    if(!foundSku){
        document.write("Product with sku number:" + skuNumber + " not found"); 
    } 
}

function main() {
    "use strict";
    var inventory = [[4824, "Shirt", 10, 15.99],[6343, "Jeans", 22, 39.99],[3223, "Socks", 36, 9.99],[2233, "Hat", 12, 14.99],[9382, "Jacket", 5, 49.99]];
    display();
    var quit = false;

    while(!quit){
        var command = window.prompt("Enter command");
        if(command !== null){
            switch(command){
                case "show":
                    display();
                    break;
                case "view":
                    view(inventory);
                    break;
                case "update":
                    update(inventory);
                    break;
                case "exit":
                    quit = true;
                    break;
                default:
                    window.alert("Please enter a valid command");
                    break;
            }
        }else {
            break;
        }
    }
    document.write("Program Terminated")
}

main();

