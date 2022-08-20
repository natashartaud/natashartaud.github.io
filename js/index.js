
function validateForm() {

    let name    = document.forms["myFormLogin"]["name"].value;
    let psw     = document.forms["myFormLogin"]["psw"].value;
    emailInput  = document.getElementById("emailInput");
    emailInput.classList.remove("imputError");
    pswInput    = document.getElementById("pswInput");
    pswInput.classList.remove("imputError");
    eMensaje    = document.getElementById ("emailMensaje")
    eMensaje.style.display = "none"
    pswMensaje  = document.getElementById ("pswMensaje")
    pswMensaje.style.display = "none"

    if ((name == "") || (psw == "")) {
        if (name == "") {
            emailInput.classList.add("imputError");
            eMensaje.style.display = "block";
        }
        if (psw == "") {
            pswInput.classList.add("imputError");
            pswMensaje.style.display = "block";
        }
        return false;
    }
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}
  
function onLoad() {
    gapi.load('auth2', function() {
     gapi.auth2.init();
    });
}





