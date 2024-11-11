let shoppingListItems = ["milk", "eggs", "bread"];

const updateItems = () => {
    // First we get the list element
    let listElement = document.getElementById("shopping-list-items");
    // Then we clear it of any existing items
    listElement.innerHTML = "";
   
    // Then we loop through the shopping list items and add them to the list
    for (const shoppingItem of shoppingListItems) {
      let itemElement = document.createElement("li");
      itemElement.innerText = shoppingItem;
      listElement.appendChild(itemElement);
    } 
  };
  

const addItem = () => {

    let item = document.getElementById("new-item-text").value;
    console.log(item);
    shoppingListItems = [shoppingListItems, item];
    // if not ... the output will be the list of previous items 
    // shoppingListItems.push(item) 
    // using push to update the list
    // console.log(shoppingListItems);
    item = "";
    console.log(item);
    updateItems();
    
    document.getElementById("new-item-text").value = "";


    // console.log("clearText",clearText);
    // clearText.value = "";

    // console.log(clearText);
    // clearText.innerText= "";

};




const clearList = () => {
    shoppingListItems=[];
    updateItems();
}


updateItems();


// ===========================check my git and sort it out! 