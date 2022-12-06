const btnLotAll=document.querySelector("#btn1");
const btnLot10=document.querySelector("#btn2");
const btnLot5=document.querySelector("#btn3");
const affichagePrix=document.querySelector("#PAM")
let check=0;


const img1=document.getElementById("livre1");
const img2=document.getElementById("livre2");
const img3=document.getElementById("livre3");
const img4=document.getElementById("livre4");
const img5=document.getElementById("livre5");
const img6=document.getElementById("livre6");
const img7=document.getElementById("livre7");
const img8=document.getElementById("livre8");
const img9=document.getElementById("livre9");
const img10=document.getElementById("livre10");
const img11=document.getElementById("livre11");
const img12=document.getElementById("livre12");
const img13=document.getElementById("livre13");
const img14=document.getElementById("livre14");
Prixaffiche()
function lot5(){
    img6.classList.toggle("hidden");
    img7.classList.toggle("hidden");
    img8.classList.toggle("hidden");
    img9.classList.toggle("hidden");
    img10.classList.toggle("hidden");
    img11.classList.toggle("hidden");
    img12.classList.toggle("hidden");
    img13.classList.toggle("hidden");
    img14.classList.toggle("hidden");
    btnLot5.classList.toggle("btnactive");
    btnLot10.classList.remove("btnactive");
    btnLotAll.classList.remove("btnactive");
    check=1;
    Prixaffiche()
}
function lot10(){
    img6.classList.remove("hidden");
    img7.classList.remove("hidden");
    img8.classList.remove("hidden");
    img9.classList.remove("hidden");
    img10.classList.remove("hidden");
    img11.classList.toggle("hidden");
    img12.classList.toggle("hidden");
    img13.classList.toggle("hidden");
    img14.classList.toggle("hidden");
    btnLot5.classList.remove("btnactive");
    btnLot10.classList.toggle("btnactive");
    btnLotAll.classList.remove("btnactive");
    check=2;
    Prixaffiche()
}
function lotAll(){
    btnLot5.classList.remove("btnactive");
    btnLot10.classList.remove("btnactive");
    btnLotAll.classList.toggle("btnactive");
    img6.classList.remove("hidden");
    img7.classList.remove("hidden");
    img8.classList.remove("hidden");
    img9.classList.remove("hidden");
    img10.classList.remove("hidden");
    img11.classList.remove("hidden");
    img12.classList.remove("hidden");
    img13.classList.remove("hidden");
    img14.classList.remove("hidden");
    check=3;
    Prixaffiche()
}
function Prixaffiche(){
    if(check==1){
        affichagePrix.innerHTML=("Payez au moins de 1,35$CA pour les 5 articles");
    }
    else if(check==2){
        affichagePrix.innerHTML=("Payez au moins de 13,54$CA pour les 10 articles");

    }
    else{
        affichagePrix.innerHTML=("Payez au moins de 24,37$CA pour les 14 articles");

    }

}
