
// document.querySelector("...CSS-selector (tag, class or #id)...");


// Getting all the input from form
//    let emailInput = document.getElementById("");
//    let fullNameInput = document.getElementById("") + document.getElementById(""); // Does this work? 

//    const feedbackForm = {type:"Fiat", model:"500", color:"white"};

let feedbackTextInput = document.getElementById("feedbackText");


function retrieveUserInput(event) {
    //let enteredFeedbackText = feedbackTextInput.value;
    //let enteredFeedbackText = event.target.value;
    
    let enteredFeedbackText = event.data; 

    console.log(enteredFeedbackText);
    //console.log(event);
}


feedbackTextInput.addEventListener("input", retrieveUserInput)


