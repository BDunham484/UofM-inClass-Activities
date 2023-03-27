var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
// add variabeles for HTML elements
var inputEl = $('#shopping-input');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    event.preventDefault();

    console.log('Form Entry: ' + inputEl.val());
    shoppingListEl.append('<li>' + inputEl.val() + '</li>');
    $('input[type="text"]').val("");
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);