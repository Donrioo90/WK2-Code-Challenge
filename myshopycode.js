// Initial shopping list array
let wanjalaList = [
    'Busuma',
    'Engokho',
    'Murere',
    'Esukari',
    'Kimikati',
    'Kamatore',
    'Enyama',
    'Kamakii',
    'Kamalwa',
    'Omena',
    'Chisaka',
    'Litoto',
    'Kamapwoni',
    'Kamaindi'    
];

// Removing an item from the list using indexes.
wanjalaList.splice(1, 1); // To remove 'Cocoa' from the list.

// JavaScript function to add an item to the list
function addItem() {
    let newItem = document.getElementById('itemInput').value.trim();
    document.getElementById('itemInput').value = '';

    if (newItem !== '') { // Check if newItem is not empty
        let list = document.getElementById('listContainer');
        let li = document.createElement('li');
        li.textContent = newItem;
        
        // Adding an event listener to mark an item as purchased when clicked
        li.addEventListener('click', function() {
            markPurchased(li);  //This code attaches the event listener 'click' which triggers when the user clicks on the item added.
        });
        
        list.appendChild(li);  //Here the item is added to the list after being marked.
    }
}

// JavaScript function to mark an item as purchased
function markPurchased(item) {
    if (!item.textContent.startsWith('Purchased:')) {  //The '!' under item ensures that the item is marked as purchased only when it does start with the word 'purchased'.
        item.textContent = `Purchased: ${item.textContent}`; //The '!' makes the statement negative.
    }
}

// JavaScript function to clear the list
function clearList() {
    let list = document.getElementById('listContainer');
    list.innerHTML = ''; // Clear all child elements (li items)
}