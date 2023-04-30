const personnage1 = prompt("Entrez le nom du personnage 1");
let pointsAtack1 = prompt("Entrez combien de points d'attaque vous avez");


const personnage2 = prompt("Entrez le nom du personnage 2");
let pointsDef2 = prompt("Entrez combien de points de défense vous avez");
let pointsVie2 = prompt("Entrez combien de points de vie vous avez");
const bouclier2 = prompt("Avez-vous un bouclier (o) ou (n)")



if (pointsAtack1 > pointsDef2 && bouclier2 == "n") {
    let calc = pointsAtack1 - pointsDef2;
    pointsVie2 = pointsVie2 - calc
    alert(`Vous avez fait ${calc} points de dégâts à votre adversaire ${personnage2}`);
    alert(`${personnage2} il y a encore ${pointsVie2} points de vie.`);

} else if (pointsAtack1 > pointsDef2 && bouclier2 == "o") {
    let calc = (pointsAtack1 - pointsDef2) / 2;
    pointsVie2 = pointsVie2 - calc
    alert(`Vous avez fait ${calc} points de dégâts à votre adversaire ${personnage2}`);
    alert(`${personnage2} il y a encore ${pointsVie2} points de vie.`);
    
} else if (pointsAtack1 <= pointsDef2) {
    alert("Vous avez fait 0 points de dégâts à votre adversaire");
}