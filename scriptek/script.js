document.getElementById("mybutton").addEventListener ("click", stilus);
function stilus(){
    let pontok=0;
    let valaszok=document.querySelectorAll('input[type="radio"]:checked');
    if(valaszok.length<3){
        alert("Kérlek, minden kérdésre válaszolj!");
        return;
    }
    for(let i=0; i<valaszok.length;i++)
    {
        pontok += parseInt(valaszok[i].value);
    }
    if(pontok<=3)
    {
        document.getElementById("megoldas").innerHTML = "Eredményed:<br>Elegáns körömstílus ajánlott neked: francia manikűr.";
      /*document.getElementById("eredmenykep").src="kepek/"*/
    }
    else if (pontok<=6){
        document.getElementById("megoldas").innerHTML="Eredményed:<br>Vidám, élénk körmöket ajánlunk: színes gél lakkok.";
    }
    else{
        document.getElementById("megoldas").innerHTML="Eredményed:<br>Minimalista körömstílus illik hozzád: egyszínű, letisztult dizájn.";
    }    
}


 

       
