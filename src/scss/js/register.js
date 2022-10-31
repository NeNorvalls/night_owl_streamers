// __________________REGISTER USER
const API_BASE_URL = "https://nf-api.onrender.com";
/**
 * API call that register the user
 * @param {string} url 
 * @param {any} userData 
 * ```js
 * regUser(regUrl, userReg);
 * ```
 */

async function registerUser(url, userData) {
    console.log(url, userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };

        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
    }   catch (error) {
        console.log(error);
    }
}

const userToRegister = {
        "name": "burla202927",
        "email": "burla202927@stud.noroff.no",
        "password": "burla202927",
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;
// registerUser(registerUrl, userToRegister);




//_____________________REGISTER VALIDATION
const regForm = document.querySelector("#regForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

regForm.addEventListener("submit", (event) => {

    validateForm();

    console.log(validForm());
    if (validForm() === true) {
        form.submit();
    } else {
        event.preventDefault();
    }
});

function validForm() {
    const inputFields = regForm.querySelectorAll(".input-group");
    let result = true;

    inputFields.forEach((field) => {
        if(field.classList.contains("error")) {
            result = false;
        }
    });
    return result;
}

function validateForm() {
    // username
    if(username.value.trim() === "") {
        setError(username, "Username can not be blank");
    } else if(username.value.trim().length < 3 || username.value.trim().length > 15) {
        setError(username, "Username must be between 3 and 15 characters");
    } else {
        setSuccess(username);
    }

        // email
        if(email.value.trim() === "") {
            setError(email, "A valid email must be provided");
        } else if(validateEmail(email.value)) {
            setSuccess(email);
        } else {
            setError(email, "A valid email must be provided");
        }

        // password
        if(password.value.trim() === ""){
            setError(password, "Password can not be empty");
        } else if(password.value.trim().length < 8 || password.value.trim().length > 20){
            setError(password, "Password must be between 8 and 20 characters")
        } else {
            setSuccess(password);
    }
}


function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains("success")) {
        parent.classList.remove("success");
    }
    parent.classList.add("error");
    const paragraph = parent.querySelector("p");
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains("error")){
        parent.classList.remove("error");
    }
    parent.classList.add("success");
}

function validateEmail(email){
    const regEx =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return regEx.test(email);
}



// ___________________REQUEST WITH TOKEN

async function getWithToken(url, method = "GET") {
    try {
        console.log(url);
        const token = localStorage.getItem("accessToken");
        console.log(token);
        const fetchOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, fetchOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}
const postUrl = `${API_BASE_URL}/api/v1/social/posts`;

getWithToken(postUrl);



