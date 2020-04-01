function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value.trim()).toLowerCase())) {
        showSuccess(input);
    } else {
        showError(input, `${input.id} not valid`);
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Password do not match");
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input.id} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${input.id} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function checkRequired(formInput) {
    formInput.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${input.id} is required`);
        } else {
            showSuccess(input);
        }
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 4, 16);
    checkLength(password, 8, 64);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});