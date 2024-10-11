let loginInputEl = document.getElementById("loginSearchInput");
let loginInputDescriptionEl = document.getElementById("loginInputDescription");


loginInputEl.addEventListener("click", ()=>{
    loginInputEl.placeholder = '';
    loginInputDescriptionEl.textContent = "Enter Mobile Number";
    loginInputEl.style.borderColor = "#2874F0";
});

loginInputEl.addEventListener("blur", () => {
    loginInputEl.placeholder = 'Enter Mobile Number';
    loginInputDescriptionEl.textContent = "";
    loginInputEl.style.borderColor = "#e6e6e6";
});
