
$(document).ready(function () {
    // Validate Username
    $("#usernamecheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $("#usernames").val();
        let regex = /^[A-Za-z0-9]+$/;
        if (usernameValue.length == "") {
            $("#usernamecheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 6 || usernameValue.length > 10) {
            $("#usernamecheck").show();
            $("#usernamecheck").html("**length of username must be between 6 and 10");
            usernameError = false;
            return false;
        } else if (!regex.test(usernameValue)) {
            $("#usernamecheck").show();
            $("#usernamecheck").html("**special characters are not allowed");
            usernameError = false;
            return false;
        } else {
            $("#usernamecheck").hide();
            usernameError = true;
        }
    }

    // Validate Email
    $("#emailidcheck").hide();
    let emailError = true;
    $("#emails").keyup(function () {
        validateEmail();
    });

    function validateEmail() {
        let emailValue = $("#emails").val();
        let regex2 = /^([\w\.]+)@northeastern.edu$/;
        if (emailValue.length == "") {
            $("#emailidcheck").show();
            emailError = false;
            return false;
        } else if (!regex2.test(emailValue)) {
            $("#emailidcheck").show();
            $("#emailidcheck").html("**please provide valid northeastern email id");
            usernameError = false;
            return false;
        } else if (emailValue.length < 19) {
            $("#emailidcheck").show();
            $("#emailidcheck").html("**there should atleast be 2 characters before '@'");
            emailError = false;
            return false;
        } else {
            $("#emailidcheck").hide();
            emailError = true;
        }
    }

    $("#passwordcheck").hide();
    let passwordError = true;
    let regex3 = new RegExp("^(?=.*[a-z])");
    let regex4 = new RegExp("^(?=.*[A-Z])");
    let regex5 = new RegExp("^(?=.*[0-9])");
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
            $("#passwordcheck").show();
            passwordError = false;
            return false;
        }
        else if (passwordValue.length < 8) {
            $("#passwordcheck").show();
            $("#passwordcheck").html(
                "**length of your password must be atleast 8"
            );
            $("#passwordcheck").css("color", "red");
            passwordError = false;
            return false;
        } else if (!regex3.test(passwordValue)) {
            $("#passwordcheck").show();
            $("#passwordcheck").html("**password must contain at least 1 lowercase alphabetical character");
            passwordError = false;
            return false;
        } else if (!regex4.test(passwordValue)) {
            $("#passwordcheck").show();
            $("#passwordcheck").html("**password must contain at least 1 uppercase alphabetical character");
            passwordError = false;
            return false;
        } else if (!regex5.test(passwordValue)) {
            $("#passwordcheck").show();
            $("#passwordcheck").html("**password must contain at least 1 numeric character");
            passwordError = false;
            return false;
        } else {
            $("#passwordcheck").hide();
            passwordError = true;
        }
    }

    $("#submitbtn").click(function () {
        validateUsername();
        validateEmail();
        validatePassword();
        if (
            usernameError == true &&
            passwordError == true &&
            emailError == true
        ) {

        localStorage.setItem("username", $("#usernames").val());
        return true;
        } else {
            alert("Please fill the form properly");
            return false;
        }
    });
});