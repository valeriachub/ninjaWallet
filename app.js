function goToLogin() {
    window.open("login.html", "_self");
}

function goToRegistration() {
    window.open("registration.html", "_self");
}

function login() {
    window.open("main.html", "_self");

    // var urlApi = 'http://91.234.37.244:8080';
    // var login = $('#username').val();
    // var password = $('#password').val();
    //
    // $.ajax({
    //     type: "POST",
    //     beforeSend: function (request) {
    //         request.setRequestHeader("Access-Control-Allow-Origin", '*');
    //     },
    //     url: urlApi + "/nynja/login",
    //     data: {username: login, password: password},
    //
    //     success: function (d) {
    //         console.log('Success');
    //
    //     },
    //     fail: function (error) {
    //         console.log('Error with balance');
    //     }
    // });
}

function register() {
    window.open("main.html", "_self");
}
