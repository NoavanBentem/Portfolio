

/**
 const starsRating = document.querySelector(".rating");

function starRatingScale (event) {
    //let starsAmount = event.target.value;
    //let starsAmount = starsAmount.control.input;

    //console.dir(starsRating);
    console.log(starsRating);
}

starsRating.addEventListener("mouseover", starRatingScale);

 */

// 
const feedbackTextInput = document.getElementById("feedback-text");
const remainingCharsData = document.getElementById("remaining-chars");

const maxAllowedChars = feedbackTextInput.maxLength;


function updateRemainingChars (event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    
    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsData.textContent = remainingCharacters;

    if (remainingCharacters <= 190) {
        //feedbackTextInput.classList.add = "warning"
        feedbackTextInput.className = "warning form-inputfield"         // Adds warning class
    } else {
        feedbackTextInput.className = "form-inputfield"                 // And goes back when not in warning-zone
    }
}


feedbackTextInput.addEventListener("input", updateRemainingChars);















