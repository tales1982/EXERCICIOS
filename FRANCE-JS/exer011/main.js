function btn(){
    let copia ="";
    let mot = prompt("tapez un mot pour voir s'il s'agit d'un polydrome");

    for(let i = mot.length -1; i >= 0 ; i--){
        copia += mot[i]
    }
    if(mot == copia){
        alert(`Le mot est plydrome..: ${mot} == ${copia}`);
        
    }else{
    alert(`Le mot n'est pas polydrome..:${mot} == ${copia}`);
}
}