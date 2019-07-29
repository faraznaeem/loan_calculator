document.getElementById('loan-form').addEventListener('submit', calculateResults)

function calculateResults(e) {
    console.log('Calculating ....')

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayments = document.getElementById('monthly-payment');
    const totalPayments = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(mount.value);
    const calculationInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value) * 12;
    
    e.preventDefault();

}