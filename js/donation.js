document.getElementById('btn-Donation')
    .addEventListener('click', function (even) {
        even.preventDefault();



        const addMoney = getInputFieldValueById('add-donate');


        const balance = getTextFieldValueById('adding-donate');
        const TotalBalance = getTextFieldValueById('Total-balance');

        const newBalance = balance + addMoney;
        const RemainingBalance = TotalBalance - addMoney;

        document.getElementById('adding-donate').innerText = newBalance;
        document.getElementById('Total-balance').innerText = RemainingBalance;





    });