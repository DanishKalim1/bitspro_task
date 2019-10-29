//Form Validation
function FormValidation() {
    let email = document.getElementById('my-email');
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let pass = document.getElementById('pwd').value;
    let fn = document.getElementById('first_name').value;
    let ln = document.getElementById('last_name').value;
    if (fn == "") {
        $("#error1").text("First Name cannot be empty");
        document.getElementById('first_name').style.borderColor = "red";
        return false;
    } else {
        $("#error1").text("");
        document.getElementById('first_name').style.borderColor = "green";
    }
    if (ln == "") {
        $("#error2").text("Last Name cannot be empty");
        document.getElementById('last_name').style.borderColor = "red";
        return false;
    } else {
        $("#error2").text("");
        document.getElementById('last_name').style.borderColor = "green";
    }
    if (!filter.test(email.value)) {
        $("#error3").text("Looks like this is not an email");
        document.getElementById('my-email').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('my-email').style.borderColor = "green";
    }
    if (pass == "") {
        $("#error4").text("Password cannot be empty");
        document.getElementById('pwd').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('pwd').style.borderColor = "green";
    }
}