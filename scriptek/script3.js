document.getElementById("kuka").addEventListener("click", ures);
function ures(){
    document.getElementById("ket_db").value = 0;
    document.getElementById("ot_db").value = 0;
    document.getElementById("tiz_db").value = 0;
    document.getElementById("husz_db").value = 0;

    document.getElementById("kosar").innerHTML = "A kosár jelenleg üres.";

    document.getElementById("ar").innerHTML = "Fizetendő összeg: 0 Ft";
}