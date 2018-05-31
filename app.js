function goToLogin() {
    window.open("login.html", "_self");
}

function goToRegistration() {
    window.open("registration.html", "_self");
}

function login() {

    const params = {
        username: document.querySelector('#username').value,
        password: document.querySelector('#password').value
    }

    var request = new XMLHttpRequest();
    request.open('POST', 'http://91.234.37.244:8080/nynja/login');
    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    request.send(JSON.stringify(params))

    request.onload = function () {
        alert(request.responseText)
    }
}
