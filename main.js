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
        addBorderErr(firstName);
        addErrIcon(firstName);
        errText[0].innerHTML = 'Cannot be empty';
        arr.push(errText[0].innerHTML);
    } else if (!req.test(firstName.value)) {
        addBorderErr(firstName);
        addErrIcon(firstName);
        errText[0].innerHTML = 'At least 3 Characters';
        arr.push(errText[0].innerHTML);
    } else {
        removeBorderErr(firstName);
        removeErrIcon(firstName);
        errText[0].innerHTML = '';
    }
}
// Last name
function checkLastName(arr, req) {
    if (lastName.value === '' || lastName.value === null) {
        addBorderErr(lastName);
        addErrIcon(lastName);
        errText[1].innerHTML = 'Cannot be Empty';
        arr.push(errText[1].innerHTML);
    } else if (!req.test(lastName.value)) {
        addBorderErr(lastName);
        addErrIcon(lastName);
        errText[1].innerHTML = 'At least 3 Characters';
        arr.push(errText[1].innerHTML);
    } else {
        removeBorderErr(lastName);
        removeErrIcon(lastName);
        errText[1].innerHTML = '';
    }
}
// Email
function checkEmail(arr, req) {
    if (email.value === '' || email.value === null) {
        addBorderErr(email);
        addErrIcon(email);
        errText[2].innerHTML = 'Cannot be Empty';
        arr.push(errText[2].innerHTML);
    } else if (!req.test(email.value)) {
        addBorderErr(email);
        addErrIcon(email);
        errText[2].innerHTML = 'It looks like invalide Email';
        arr.push(errText[2].innerHTML);
    } else {
        removeBorderErr(email);
        removeErrIcon(email);
        errText[2].innerHTML = '';
    }
}
// Password
function checkPassword(arr, req) {
    if (password.value === '' || password.value === null) {
        addBorderErr(password);
        addErrIcon(password);
        errText[3].innerHTML = 'Cannot be Empty';
        arr.push(errText[3].innerHTML);
    } else if (!req.test(password.value)) {
        addBorderErr(password);
        addErrIcon(password);
        if (password.value.length > 20) {
            errText[3].innerHTML = 'Password is too Long';
        } else {
            errText[3].innerHTML = 'Password must be at least 6 Characters';
        }
        arr.push(errText[3].innerHTML);
    } else {
        removeBorderErr(password);
        removeErrIcon(password);
        errText[3].innerHTML = '';
    }
}

// Add error icon
function addErrIcon(elm) {
    elm.nextElementSibling.setAttribute("src", "./images/icon-error.svg");
}
// Remove error icon
function removeErrIcon(elm) {
    elm.nextElementSibling.removeAttribute("src");
}

// Add Border error 
function addBorderErr(elm) {
    elm.setAttribute("class", "errBorder");
}
// Remove Border error
function removeBorderErr(elm) {
    elm.removeAttribute("class");
}
