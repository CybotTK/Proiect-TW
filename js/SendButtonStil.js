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