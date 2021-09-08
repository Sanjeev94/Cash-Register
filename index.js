const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
//  console.log(billAmount.value);
//   console.log(cashGiven.value);

checkButton.addEventListener("click", function validateBillandCashAmount() {
        hideMessage();
        if(billAmount.value > 0) 
        {
        if(cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        }
        else {
            showMessage("The cash provided should be equal to the bill amount");

        }

    }
    else {
        showMessage("Invalid Bill amount");
    }
});

function calculateChange(amountToBeReturned) {
    for(let i = 0; i < availableNotes.length; i++)
    {
        const numberofNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberofNotes;
    }

}

function hideMessage() {
    message.style.display = "none";
}

// function calculateChange() 
function showMessage(msg) {
    console.log("here");
    message.style.display = "block";
    message.innerText = msg;
}