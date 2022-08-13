const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errText = document.querySelectorAll(".errText");


form.addEventListener("submit", (e) => {
    let errMsg = [];
    let fullNameReq = new RegExp(/^[a-zA-Z0-9]{3,}$/);
    let emailReq = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let passwordReq = new RegExp(/^[a-zA-Z0-9!@#$%^+./&*-]{6,20}$/);

    checkFirstName(errMsg, fullNameReq);
    checkLastName(errMsg, fullNameReq);
    checkEmail(errMsg, emailReq);
    checkPassword(errMsg, passwordReq);
    
    if (errMsg.length > 0) {
        e.preventDefault();
    }
})

// First name
function checkFirstName(arr, req) {
    if (firstName.value === '' || firstName.value === null) {
        addErr(firstName);
        arr.push(errText[0].innerHTML = 'Cannot be empty');
    } else if (!req.test(firstName.value)) {
        addErr(firstName);
        arr.push(errText[0].innerHTML = 'At least 3 Characters');
    } else {
        removeErr(firstName);
        errText[0].innerHTML = '';
    }
}
// Last name
function checkLastName(arr, req) {
    if (lastName.value === '' || lastName.value === null) {
        addErr(lastName);
        arr.push(errText[1].innerHTML = 'Cannot be Empty');
    } else if (!req.test(lastName.value)) {
        addErr(lastName);
        arr.push(errText[1].innerHTML = 'At least 3 Characters');
    } else {
        removeErr(lastName);
        errText[1].innerHTML = '';
    }
}
// Email
function checkEmail(arr, req) {
    if (email.value === '' || email.value === null) {
        addErr(email);
        arr.push(errText[2].innerHTML = 'Cannot be Empty');
    } else if (!req.test(email.value)) {
        addErr(email);
        arr.push(errText[2].innerHTML = 'It looks like invalide Email');
    } else {
        removeErr(email);
        errText[2].innerHTML = '';
    }
}
// Password
function checkPassword(arr, req) {
    if (password.value === '' || password.value === null) {
        addErr(password);
        arr.push(errText[3].innerHTML = 'Cannot be Empty');
    } else if (!req.test(password.value)) {
        addErr(password);
        if (password.value.length > 20) {
            errText[3].innerHTML = 'Password is too Long';
        } else {
            errText[3].innerHTML = 'Password must be at least 6 Characters';
        }
        arr.push(errText[3].innerHTML);
    } else {
        removeErr(password);
        errText[3].innerHTML = '';
    }
}

// Add error
function addErr(elm) {
    elm.nextElementSibling.setAttribute("src", "./images/icon-error.svg");
    elm.setAttribute("class", "errBorder");
}
// Remove error
function removeErr(elm) {
    elm.nextElementSibling.removeAttribute("src");
    elm.removeAttribute("class");
}
