// Fetch the items from JSON file

function loadItems(){
    return fetch('data/data.json')
    .then(response =>console.log(response))
}


// main

loadItems()
     .then(items=>{
    //     displayItems(items);
    //     setEventListeners(items);
    })
    .catch(console.log)