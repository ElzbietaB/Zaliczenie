
    const ImieNazwisko = 'Elżbieta Brzeziecka';
    const titleDOM=document.querySelector("h1")
    titleDOM.innerHTML=ImieNazwisko


var angle = 0;

function galleryspin(sign) { 
    spinner = document.querySelector("#spinner");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}