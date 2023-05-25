function deleteForm(event){
    const para=document.getElementById("formInfo");
    para.lastChild.remove();

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    const fonts = ["Arial", "Verdana", "Helvetica", "Tahoma", "Times New Roman", "Courier New"];
    
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

    const deleteButton = event.target;
    deleteButton.style.color = randomColor;
    deleteButton.style.fontFamily = randomFont;
}
