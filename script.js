const errorText = document.getElementById("error-text");
const inputBox = document.getElementById("box-input");
const inputForm = document.getElementById("inputForm");
const mainDisplay = document.getElementById("mainDisplay");
const successDisplay = document.getElementById("successDisplay");
const emailDisplay = document.getElementById("emailDisplay");
const dismissBtn = document.getElementById("dismissBtn");

const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

inputForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    

    if(validEmail.test(inputBox.value)){
        errorText.style.display = "none" ;
        inputBox.className = "input"; 
        mainDisplay.className = "hidden";  
        successDisplay.className = "success";
        emailDisplay.innerText = inputBox.value
    } else{
        errorText.style.display = "block";  
        inputBox.className = "error"
        
    }
})

dismissBtn.addEventListener("click", ()=> {
    return location.reload()
})