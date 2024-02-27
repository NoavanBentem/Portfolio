
// document.querySelector("...CSS-selector (tag, class or #id)...");


// Getting all the input from form
//    let emailInput = document.getElementById("");
//    let fullNameInput = document.getElementById("") + document.getElementById(""); // Does this work? 

//    const feedbackForm = {type:"Fiat", model:"500", color:"white"};

let feedbackTextereaInput = document.getElementById("feedbackTexterea");


function retrieveUserInput(event) {
    //let enteredFeedbackText = feedbackTextereaInput.value;
    //let enteredFeedbackText = event.target.value;
    
    let enteredFeedbackText = event.data; 

    console.log(enteredFeedbackText);
    //console.log(event);
}


feedbackTextereaInput.addEventListener("input", retrieveUserInput)








