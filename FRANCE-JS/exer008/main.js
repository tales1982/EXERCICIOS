function btn(){
    const metres = Number(prompt("Entrez une valeur en mètres.")) ;
    const val = prompt("Choisissez la mesure laquelle vous souhaitez convertir.\n1- millimètre (mm)\n2- centimètre (cm)\n3- décimètre (dm)\n4- décamètre (dam)\n5- hectomètre (hm)\n6- kilomètre (km)\nChoisissez entre 1 et 6 pour convertir au format souhaité.");


    switch (val) {
        case "1":
            let millimètre = metres * 1000;
            alert(`la conversion de ${metres} mètres en millimètres est ${millimètre} millimètre.`);
            break;
        case "2":
            let centimètre = metres * 100;
            alert(`la conversion de ${metres} mètres en centimètre est ${centimètre} centimètre.`);
            break;
        case "3":
            let décimètre = metres * 10;
            alert(`la conversion de ${metres} mètres en décimètre est ${décimètre} décimètre.`);
            break;
        case "4":
            let décamètre = metres / 10;
            alert(`la conversion de ${metres} mètres en décamètre est ${décamètre} décamètre.`);
            break;
        case "5":
            let hectomètre  = metres / 100;
            alert(`la conversion de ${metres} mètres en hectomètre  est ${hectomètre } hectomètre.`);
            break;
        case "6":
            let kilomètre = metres / 1000;
            alert(`la conversion de ${metres} mètres en kilomètre est ${kilomètre} kilomètre.`);
            break;
    
        default:
            alert("Option invalide");
            break;
    }
    
    
    
   
}