document.getElementById('btn-Donation')
    .addEventListener('click', function (event) {
        event.preventDefault();



        const addMoney = getInputFieldValueById('add-donate');


        const balance = getTextFieldValueById('adding-donate');
        const TotalBalance = getTextFieldValueById('Total-balance');

        const newBalance = balance + addMoney;
        const RemainingBalance = TotalBalance - addMoney;

        document.getElementById('adding-donate').innerText = newBalance;
        document.getElementById('Total-balance').innerText = RemainingBalance;


        // add to history 
        const p = document.createElement('p');
        p.innerText = `${addMoney} Taka is Donated for Donate for Flood at Noakhali, Bangladesh`;

        document.getElementById('history-section').appendChild(p);


    });