let form = document.querySelector('#formSubmition');

form.addEventListener('submit', e => {

    e.preventDefault();

    let fullName = document.querySelector('#fullName').value.trim();
    let emaillAddress = document.querySelector('#emailAddress').value.trim();


    if (fullName == '' || fullName == null) {
        alert('Full name is empty');
        return false;
    }

    if (emaillAddress == '' || emaillAddress == null) {
        alert('Email is empty');
        return false;
    } 

    let orderList = document.querySelector('#orderList');
    console.log(orderList);
    orderList.innerHTML += `<li>Your full name is ${fullName.toUpperCase()} and email is ${emaillAddress.toLowerCase()}</li>`;

    form.reset();

});