document.getElementById('loan-form').addEventListener('submit', calculate)

function calculate(e){
    const amount = document.getElementById('loan_amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthly_payment = document.getElementById('monthly_payment');
    const total_amount = document.getElementById('total_amount');
    const total_interest = document.getElementById('total_interest');

    const principal = parseFloat(amount.value);
    const calculated_Interset = parseFloat(interest.value)/100/12;
    const calculated_payment = parseFloat(years.value)*12;
    const x = Math.pow(1 +calculated_Interset, calculated_payment);
    const monthly = (principal * x * calculated_Interset)/ (x-1);
    if(isFinite(monthly)){
        monthly_payment.value = value.toFixed(2);
        total_amount.value = (monthly * calculated_payment).toFixed(2);
        total_interest.value = (monthly * calculated_payment - principal).toFixed(2);

        document.getElementById('results').style.display = "block";
    }
    e.preventDefault();
}