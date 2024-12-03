document.getElementById("ketezer").addEventListener("click", ket);
function ket(){
    let ket_db = Number(document.getElementById("ket_db").value);

    if(ket_db>0)
    {
        osszeg()
    }else{
        alert(`Nem adtál meg darabszámot`)
    }

}
document.getElementById("otezer").addEventListener("click", ot);
function ot(){
    let ot_db = Number(document.getElementById("ot_db").value);

    if(ot_db>0)
    {
        osszeg()
    }else{
        alert(`Nem adtál meg darabszámot`)
    }

}
document.getElementById("tizezer").addEventListener("click", tiz);
function tiz(){
    let tiz_db = Number(document.getElementById("tiz_db").value);

    if(tiz_db>0)
    {
        osszeg()
    }else{
        alert(`Nem adtál meg darabszámot`)
    }

}
document.getElementById("huszezer").addEventListener("click", husz);
function husz(){
    let husz_db = Number(document.getElementById("husz_db").value);

    if(husz_db>0)
    {
        osszeg()
    }else{
        alert(`Nem adtál meg darabszámot`)
    }
}

document.getElementById("osszesen").addEventListener("click", osszeg);
function osszeg(){
    let osszeg=0;
    let ket_db = Number(document.getElementById("ket_db").value);
    let ot_db = Number(document.getElementById("ot_db").value);
    let tiz_db = Number(document.getElementById("tiz_db").value);
    let husz_db = Number(document.getElementById("husz_db").value);

    osszeg=osszeg+(ket_db*2000)+(ot_db*5000)+(tiz_db*10000)+(husz_db*20000)

    document.getElementById("ar").innerHTML= `Fizetendő összeg:<br> ${osszeg}Ft`;


    let kosartartalma="";
    if (ket_db > 0) {
        kosartartalma += `${ket_db} * 2000 Ft értékű utalvány<br>`;
    }
    if (ot_db > 0) {
        kosartartalma += `${ot_db} * 5000 Ft értékű utalvány<br>`;
    }
    if (tiz_db > 0) {
        kosartartalma += `${tiz_db} * 10 000 Ft értékű utalvány<br>`;
    }
    if (husz_db > 0) {
        kosartartalma += `${husz_db} * 20 000 Ft értékű utalvány<br>`;
    }

    document.getElementById("kosar").innerHTML=`Kosarad tartalma: <br> ${kosartartalma}`
}
/*
document.getElementById("kuka").addEventListener("click", ures);
function ures(){
    document.getElementById("ket_db").value = 0;
    document.getElementById("ot_db").value = 0;
    document.getElementById("tiz_db").value = 0;
    document.getElementById("husz_db").value = 0;

    document.getElementById("kosar").innerHTML = "A kosár jelenleg üres.";

    document.getElementById("ar").innerHTML = "Fizetendő összeg: 0 Ft";
}*/
