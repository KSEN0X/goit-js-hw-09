const KEY = 'feedback-form-state'; // key localStorage
let formData = {}; // an object in which the field name and value will be written

const form = document.querySelector('.feedback-form'); // reference to the DOM element-form
form.addEventListener('input', onInputHandler); // on the form things listener for the input event and the onInputHandler function
form.addEventListener('submit', onSubmitHandler); // on the form things listener for the submit event and the function onSubmit Handler

refreshForm(); // calling a function that will save data even when the page is reloaded if it was entered in some of the fields but was not sent
/**
  |=======================================
  | Function - saving data before sending
  |======================================
*/
function refreshForm() {
  try {
    const savedData = localStorage.getItem(KEY); //In this variable we receive data from localStorage by key

    if (!savedData) return; // if localStorage is empty and equals null, which equals false, exit the function
    formData = JSON.parse(savedData); // parse the value from savedData
    Object.entries(formData).forEach(([key, val]) => {
      form.elements[key].value = val;
    }); // using Object.entries we turn the formData object into an array, we go through it forEach, we compare form.elements[key]-name of the form with the key, and assign .value = val to the value
  } catch ({ message }) {
    console.log(message);
  } // error block with destructuring, second way of writing catch(error){console.log(error.message)} - an error message is displayed
}

/**
  |============================================
  | Function - saving data in localStorage
  |============================================
*/
function onInputHandler(event) {
  const inputValue = event.target.value.trim(); // we remove spaces at the beginning and end of the values entered by the user on which the event occurred
  const inputName = event.target.name; // using the name attribute we write down the name of the element on which the event occurred
  formData[inputName] = inputValue; // With this entry we assign a value to the object formData[key] = value
  localStorage.setItem(KEY, JSON.stringify(formData)); //write data to localStorage
}

/**
  |===========================================
  | Function - form, object and storage clearing
  |===========================================
*/
function onSubmitHandler(event) {
  event.preventDefault(); //prevents default behavior when submitting page reload
  event.target.reset(); //assigns reset() to the button to clear the form
  localStorage.removeItem(KEY); //clearing the key in the storage
  console.log(formData); //output the object with the corrected data to the console
  formData = {}; //clears an object
}
