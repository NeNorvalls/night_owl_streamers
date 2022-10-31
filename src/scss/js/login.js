________________________LOGIN TO USER

async function loginUser(user, userData) {
    try {
        const postData = {
            method: "POST",
            headers: {
                "Content- Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        const accessToken = json.accessToken;
        localStorage.setItem("accessToken", accessToken);
    } catch(error) {
        console.log(error);
    }
}   
    
const userToLogin = {
    "email": "burla202927@stud.noroff.no",
    "password": "burla202927"
};
    

const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

// loginUser(loginUrl, userToLogin);













// _________________________LOGIN  VALIDATION

  
const loginForm = document.querySelector("#loginForm");
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
    const inputFields = logForm.querySelectorAll(".input-group");
    let result = true;

    inputFields.forEach((field) => {
        if(field.classList.contains("error")) {
            result = false;
        }
    });
    return result;
}

function validateForm() {
  
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

