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

formular.addEventListener("submit", function(event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value; 
    var currentDate = new Date().toLocaleString();
    
    const namePattern = /^[A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)*$/;

    if (!namePattern.test(name)) {
        alert('Introduceți un nume de persoană valid.');
        document.getElementById('name').value = '';
    return;
    }
    const para=document.createElement("p");

    para.textContent="Name: "+name+" Email: "+email+ " Submitted on: "+currentDate;

    const container=document.getElementById("formInfo");
    container.appendChild(para);

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value=""; 
});
