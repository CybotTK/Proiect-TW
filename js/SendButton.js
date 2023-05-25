function performActions(){
    onClickEvent();
}

let sendButtonStyle="defaultStyle";

function onClickEvent(){
    var buttonGetter=document.querySelector("button[type='send']");
    console.log(buttonGetter);
    buttonGetter.classList.remove(sendButtonStyle);
    if (sendButtonStyle=="defaultStyle"){
        sendButtonStyle="afterClickStyle";
    }
    else{
        sendButtonStyle="defaultStyle";
    }
    buttonGetter.classList.add(sendButtonStyle);
}

let formular=document.getElementById("contactForm");
console.log(formular);

formular.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var currentDate = new Date().toLocaleString();
  
    const namePattern = /^[A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)*$/;
  
    if (!namePattern.test(name)) {
      alert('Introduceți un nume de persoană valid.');
      document.getElementById('name').value = '';
      return;
    }
  
    const para = document.createElement("p");
    para.textContent = "Name: " + name + " Email: " + email + " Submitted on: " + currentDate;
  
    const container = document.getElementById("formInfo");
    container.appendChild(para);
  
    var formData = "Name: " + name + ", Email: " + email + ", Message: " + message + ", Submitted on: " + currentDate;
  
    // Am generat un nr aleator de la 1 la 100 :p
    var randomNum = Math.floor(Math.random() * 100) + 1;
    console.log("Random number:", randomNum);
  
    // folosesc replace pentru a maska emailul
    var maskedFormData = formData.replace(/Email/g, "***");
    console.log("Masked form data:", maskedFormData);

    var storedFormData = localStorage.getItem("formDataItems");
    var formDataArray = storedFormData ? storedFormData.split("\n") : [];

    formDataArray.push(formData);

    localStorage.setItem("formDataItems", formDataArray.join("\n"));
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});

window.addEventListener("beforeunload", ()=>{
    localStorage.removeItem("formDataItems");
})
