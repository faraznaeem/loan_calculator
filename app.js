document.getElementById('loan-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = 'none'
    document.getElementById('loading').style.display = 'block'
    setTimeout(calculateResults, 2000)
    e.preventDefault();
});

function calculateResults() {
    console.log('Calculating ....')

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayments = document.getElementById('monthly-payment');
    const totalPayments = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculationInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value) * 12;

    const power = Math.pow(1 + calculationInterest, calculatePayments);
    const monthly = (principal * power * calculationInterest) / (power - 1);

    if (isFinite(monthly)) {
        monthlyPayments.value = monthly.toFixed(2);
        totalPayments.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);

        document.getElementById('results').style.display = 'block'

        document.getElementById('loading').style.display = 'none'

    } else {
        showError('Please check your numbers')
    }
}

function showError(error) {
    document.getElementById('results').style.display = 'none'
    document.getElementById('loading').style.display = 'none'

    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger'
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading)
    setTimeout(clearError, 3000)
}

function clearError(){
    document.querySelector('.alert').remove();
}