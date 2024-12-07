function getInputFieldValueById(id) {

    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}

function getTextFieldValueById(id) {
    const TextValue = document.getElementById(id).innerText;
    const TextValueNumber = parseFloat(TextValue);

    return TextValueNumber;
}

function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // show the section 
    document.getElementById(id).classList.remove('hidden');
}