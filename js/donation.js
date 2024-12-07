// Donate for Flood at Noakhali, Bangladesh
document.getElementById('btn-Donation')
    .addEventListener('click', function (event) {
        event.preventDefault();



        const addMoney = getInputFieldValueById('add-donate');

        if (isNaN(addMoney)) {
            alert('Failed to add money');
            return;
        }
        else {
            const balance = getTextFieldValueById('adding-donate');
            const TotalBalance = getTextFieldValueById('Total-balance');

            if (addMoney > TotalBalance) {
                alert('Failed to add money');
                return;
            }

            const newBalance = balance + addMoney;
            const RemainingBalance = TotalBalance - addMoney;

            document.getElementById('adding-donate').innerText = newBalance;
            document.getElementById('Total-balance').innerText = RemainingBalance;


            // add to history 
            const p = document.createElement('p');
            const now = new Date();
            const timeString = now.toLocaleTimeString();

            const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;


            p.innerHTML = `${addMoney} Taka is Donated for Donate for Flood at Noakhali, Bangladesh <br> Date: ${timeString} Timezone: ${userTimeZone} Bangladesh`;

            p.style.padding = "5px";
            p.style.margin = "15px";
            p.style.border = "1px solid orange";

            document.getElementById('history-section').appendChild(p);
        }

    });



// Donate for Flood Relief in Feni,Bangladesh
document.getElementById('btn-Donation-feni')
    .addEventListener('click', function (event) {
        event.preventDefault();



        const addMoney = getInputFieldValueById('add-donate-feni');

        if (isNaN(addMoney)) {
            alert('Failed to add money');
            return;
        }
        else {
            const balance = getTextFieldValueById('adding-donate-feni');
            const TotalBalance = getTextFieldValueById('Total-balance');

            if (addMoney > TotalBalance) {
                alert('Failed to add money');
                return;
            }

            const newBalance = balance + addMoney;
            const RemainingBalance = TotalBalance - addMoney;

            document.getElementById('adding-donate-feni').innerText = newBalance;
            document.getElementById('Total-balance').innerText = RemainingBalance;


            // add to history 
            const p = document.createElement('p');
            const now = new Date();
            const timeString = now.toLocaleTimeString();

            const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;


            p.innerHTML = `${addMoney} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh <br> Date: ${timeString} Timezone: ${userTimeZone} Bangladesh`;

            p.style.padding = "5px";
            p.style.margin = "15px";
            p.style.border = "1px solid orange";

            document.getElementById('history-section').appendChild(p);

        }

    });

// Aid for Injured in the Quota Movement Bangladesh 
document.getElementById('btn-Donation-quota')
    .addEventListener('click', function (event) {
        event.preventDefault();



        const addMoney = getInputFieldValueById('add-donate-quota');



        if (isNaN(addMoney)) {
            alert('Failed to add money');
            return;
        }

        else {
            const balance = getTextFieldValueById('adding-donate-quota');
            const TotalBalance = getTextFieldValueById('Total-balance');

            if (addMoney > TotalBalance) {
                alert('Failed to add money');
                return;
            }

            const newBalance = balance + addMoney;
            const RemainingBalance = TotalBalance - addMoney;

            document.getElementById('adding-donate-quota').innerText = newBalance;
            document.getElementById('Total-balance').innerText = RemainingBalance;


            // add to history 
            const p = document.createElement('p');

            const now = new Date();
            const timeString = now.toLocaleTimeString();

            const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;


            p.innerHTML = `${addMoney} Taka is Donated for Aid for Injured in the Quota Movement <br> Date: ${timeString} Timezone: ${userTimeZone} Bangladesh`;

            p.style.padding = "5px";
            p.style.margin = "15px";
            p.style.border = "1px solid orange";

            document.getElementById('history-section').appendChild(p);
        }

    });