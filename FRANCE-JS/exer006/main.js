const voiture1 = prompt("Entrez le modèle de voiture-1.");
const voiture2 = prompt("Entrez le modèle de voiture-2.");
const vitesseV1 = prompt(`Digite a velocidade do ${voiture1}.`);
const vitesseV2 = prompt(`Digite a velocidade do ${voiture2}.`);

if(vitesseV1 > vitesseV2){
    alert(`Le véhicule ${ voiture1} est plus rapide avec une vitesse maximale de ${ vitesseV1}.`);
}else if(vitesseV2 > vitesseV1){
    alert(`Le véhicule ${ voiture2} est plus rapide avec une vitesse maximale de ${ vitesseV2}.`);
}else{
    alert(`les deux voitures ont la même vitesse.`);
}