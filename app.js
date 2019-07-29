document.getElementById('loan-form').addEventListener('submit', calculateResults)

function calculateResults(e) {
    console.log('Calculating ....')

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayments = document.getElementById(monthly-payment);
    const totalPayments = document.getElementById(total-payment);
    const totalInterest = document.getElementById(total-interest);

    e.preventDefault();

}