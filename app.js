document.querySelector('#loan-form').addEventListener("submit", calculateResult);

function calculateResult(e) {
    // console.log("Event Listened...")

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const year = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(year.value) * 12;

    const x = Math.pow(1 + calculateInterest, calculatedPayment);
    const monthly = (principal * x * calculateInterest) / (x - 1)

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayment).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2)
    } else {
        showError("PLEASE!!! fill the fields.")
    }

    e.preventDefault();
}

let showError = (error) => {
    //create div
    const errorDiv = document.createElement('div');

    //get element
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    //add classes
    errorDiv.className = "alert alert-danger";

    //creating and adding textNode to errorDiv
    errorDiv.appendChild(document.createTextNode(error));

    //inserting the errordiv in the UI
    card.insertBefore(errorDiv, heading);

    //clear error text after 3sec
    setTimeout(clearError, 2000)
}

let clearError = () => document.querySelector('.alert').remove(); 