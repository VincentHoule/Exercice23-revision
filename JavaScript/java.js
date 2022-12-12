const btnLotAll=document.querySelector("#btn1");
const btnLot10=document.querySelector("#btn2");
const btnLot5=document.querySelector("#btn3");
const btn135=document.querySelector("#montant1");
const btn1354=document.querySelector("#montant2");
const btn2437=document.querySelector("#montant3");
const btn30=document.querySelector("#montant4");
const btn35=document.querySelector("#montant5");
const btn40=document.querySelector("#montant6");
const affichagePrix=document.querySelector("#PAM")
const prixChoix=document.querySelector("#AutreMontant");
const formulaire=document.getElementById("sectionBTN");

const verif=document.getElementById("montant-reel");
let check=0;
let valid =false;


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
    img6.classList.add("hidden");
    img7.classList.add("hidden");
    img8.classList.add("hidden");
    img9.classList.add("hidden");
    img10.classList.add("hidden");
    img11.classList.add("hidden");
    img12.classList.add("hidden");
    img13.classList.add("hidden");
    img14.classList.add("hidden");
    btnLot5.classList.add("btnactive");
    check=1;
    Prixaffiche()
}
function lot10(){
    removeActive();
    img6.classList.remove("hidden");
    img7.classList.remove("hidden");
    img8.classList.remove("hidden");
    img9.classList.remove("hidden");
    img10.classList.remove("hidden");
    btnLot10.classList.add("btnactive");

    check=2;
    Prixaffiche()
}
function lotAll(){
    img6.classList.remove("hidden");
    img7.classList.remove("hidden");
    img8.classList.remove("hidden");
    img9.classList.remove("hidden");
    img10.classList.remove("hidden");
    img11.classList.remove("hidden");
    img12.classList.remove("hidden");
    img13.classList.remove("hidden");
    img14.classList.remove("hidden");    
    if(check==-3){
    btnLotAll.classList.add("btnactive");

    }
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
function montant135(){
    removeActive2();
    btn135.classList.toggle("btn2active");
    prixChoix.value=1.35;
    lot5();
}
function montant1354(){
    removeActive2();
    btn1354.classList.toggle("btn2active");
    prixChoix.value=13.54;
    lot10();
}
function montant2437(){
    removeActive2();
    btn2437.classList.toggle("btn2active");
    prixChoix.value=24.37;    
    lotAll();
}
function montant30(){
    removeActive2();
    btn30.classList.toggle("btn2active");
    prixChoix.value=30;
    lotAll()
}
function montant35(){
    removeActive2();
    btn35.classList.toggle("btn2active");
    prixChoix.value=35;
    lotAll();
}
function montant40(){
    removeActive2();
    btn40.classList.toggle("btn2active");
        valid=true;
        prixChoix.value=40;

    
    lotAll();
}
function actuPrix(){
    removeActive2();
    if(prixChoix.value<1.35){
        valid=false;
    }
    else if(prixChoix.value>=1.35 && prixChoix.value<13.54){
        lot5()
        valid=true;
    }
    else if (prixChoix.value>=13.54 && prixChoix.value<24.37){
        lot10();
        valid=true
    }
    else{
        lotAll();
        valid=true;
    }

}
function removeActive(){
    img6.classList.add("hidden");
    img7.classList.add("hidden");
    img8.classList.add("hidden");
    img9.classList.add("hidden");
    img10.classList.add("hidden");
    img11.classList.add("hidden");
    img12.classList.add("hidden");
    img13.classList.add("hidden");
    img14.classList.add("hidden");
    btnLot5.classList.remove("btnactive");
    btnLotAll.classList.remove("btnactive");
    btnLot10.classList.remove("btnactive");

}
function removeActive2(){    
    btn40.classList.remove("btn2active");
    btn135.classList.remove("btn2active");
    btn2437.classList.remove("btn2active");
    btn30.classList.remove("btn2active");
    btn35.classList.remove("btn2active");
}
function envoyer(){
    verif.setAttribute('value',prixChoix.value);
    console.log(verif.getAttribute('value'));

    if(valid){
        verif.setAttribute('value',prixChoix.value);
        formulaire.submit();
    }

}
