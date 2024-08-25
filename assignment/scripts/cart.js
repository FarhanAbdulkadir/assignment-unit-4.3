console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
// Declare global variable named basked and set it to empty 
let basket= [];

// function add an item to the basket 
function addItem(item){
    // add item to the basket array
    basket.push(item);
    // return true if item was added
    return true


}



function listItems(){


    for(let i=0; i<basket.length; i++){
        console.log(basket[i]);
    }

}


function empty(){

    basket.splice(0, basket.length);
    return basket;



}


// testing the function 

// test addItem function

console.log(`Basket is ${basket}`);
console.log('Adding Apples(expect true)', addItem('Apple'));
console.log('Adding orange(expect true)', addItem('Orange'));
console.log('Adding grape(expect true)', addItem('Grape'));
console.log('Adding banana (expect true)', addItem('Banana'));
console.log(`Basket is now ${basket}`);

// test listItem function

console.log('listing items in basket');
listItems();



// test empty function 

console.log('emptying basket...');
console.log('Basket after emptying', empty());
listItems();

// STRETCH GOALS 

// declare global variable named maxItems and s et it to 5

const maxItems = 5;

function isFull(){
// if the items in the basket aren't full return true

    return basket.length>=maxItems
        


}


// test isFull function 

console.log(`is the function not full? ${isFull()}`);

// updated addItem function 




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
