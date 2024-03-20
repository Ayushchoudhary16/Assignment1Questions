const menuItems = ["Pizza","Burger","Dosa","Fry Rice"]

const userInput = 47;

//const item = menuItems[userInput - 1]
//console.log(item);
//logic 1
//if(item){
//    console.log(`${item} Ordered`)
//}
//else{
//    console.log("Item is not available");
//}

//logic 2

if(userInput > menuItems.length ){
    console.log("Items is not available");
}else{
    console.log(`${menuItems[userInput-1]} Orderd`);
}