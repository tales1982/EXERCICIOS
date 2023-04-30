function btn() {

    const nome = prompt("Tapez votre nom.");
    let villagens = "";
    let contagens = 0;

    visit = prompt(`bonjour ${nome} avez-vous déjà visité une ville en europe?(O/N)`);

    while (visit != 'n') {

        let ville = prompt("Quelles villes as-tu visitées ?");
        visit = prompt("Avez-vous visité d'autres villes ? (o/n)");
        villagens += ville + "\n";
        contagens ++;
    }
alert(`Liste des villes visitées.\n ${villagens}\n${nome} vous avez déjà vu ${contagens} les villes européennes.`);
}