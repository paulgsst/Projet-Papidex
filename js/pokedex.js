export const pokedex = [
    {
        numéro : 386,
        nom : "Deoxys Forme Normale",
        type1 : "Psy",
        type2: null,
        image : "images/deoxys.png",
        taille : 1.7,
        poids : 60.8,
        pv : 50,
        attaque : 150,
        defense : 50,
        attaque_speciale : 150,
        defense_speciale : 50,
        vitesse : 150
    },
     {
        numéro : 383,
        nom : "Groudon",
        type1 : "Sol",
        type2: null,
        image : "images/groudon.png",
        taille : 3.5,
        poids : 950.0,
        pv : 100,
        attaque : 150,
        defense : 140,
        attaque_speciale : 100,
        defense_speciale : 90,
        vitesse : 90
    },
     {
        numéro : 382,
        nom : "Kyogre",
        type1 : "Eau",
        type2: null,
        image : "images/kyogre.png",
        taille : 4.5,
        poids : 352.0,
        pv : 100,
        attaque : 100,
        defense : 90,
        attaque_speciale : 150,
        defense_speciale : 140,
        vitesse : 90
    },
     {
        numéro : 646,
        nom : "Kyurem",
        type1 : "Dragon",
        type2: "Glace",
        image : "images/kyurem.png",
        taille : 3.0,
        poids : 325.0,
        pv : 125,
        attaque : 130,
        defense : 90,
        attaque_speciale : 130,
        defense_speciale : 90,
        vitesse : 95
    },
     {
        numéro : 384,
        nom : "Rayquaza",
        type1 : "Dragon",
        type2: "Vol",
        image : "images/rayquaza.png",
        taille : 7.0,
        poids : 206.5,
        pv : 105,
        attaque : 150,
        defense : 90,
        attaque_speciale : 150,
        defense_speciale : 90,
        vitesse : 95
    },
     {
        numéro : 643,
        nom : "Reshiram",
        type1 : "Dragon",
        type2: "Feu",
        image : "images/reshiram.png",
        taille : 3.2,
        poids : 330.0,
        pv : 100,
        attaque : 120,
        defense : 100,
        attaque_speciale : 150,
        defense_speciale : 120,
        vitesse : 90
    },
     {
        numéro : 644,
        nom : "Zekrom",
        type1 : "Dragon",
        type2: "Electrik",
        image : "images/zekrom.png",
        taille : 2.9,
        poids : 345.0,
        pv : 100,
        attaque : 150,
        defense : 120,
        attaque_speciale : 120,
        defense_speciale : 100,
        vitesse : 90
    },
    {
        numéro : 612,
        nom : "Tranchodon",
        type1 : "Dragon",
        type2: null,
        image : "images/tranchodon.png",
        taille : 1.8,
        poids : 105.5,
        pv : 76,
        attaque : 147,
        defense : 90,
        attaque_speciale : 60,
        defense_speciale : 70,
        vitesse : 97
    },
    {
        numéro : 445,
        nom : "Carchacrok",
        type1 : "Dragon",
        type2: "Sol",
        image : "images/carchacrok.png",
        taille : 1.9,
        poids : 95.0,
        pv : 108,
        attaque : 130,
        defense : 95,
        attaque_speciale : 80,
        defense_speciale : 85,
        vitesse : 102
    },
    {
        numéro : 6767,
        nom : "Raimundonstre",
        type1 : "Psy",
        type2: "Roche",
        image : "images/monpokepref.png",
        taille : 1.82,
        poids : 64.67,
        pv : 50,
        attaque : 150,
        defense : 140,
        attaque_speciale : 120,
        defense_speciale : 100,
        vitesse : 90
    },
    {
        numéro : 6769,
        nom : "Lamolix",
        type1 : "Tenebres",
        type2: "Insecte",
        image : "images/lamolix.png",
        taille : 1.83,
        poids : 72.0,
        pv : 100,
        attaque : 200,
        defense : 60,
        attaque_speciale : 200,
        defense_speciale : 110,
        vitesse : 140
    },
    {
        numéro : 6768,
        nom : "Razor",
        type1 : "Acier",
        type2: "Electrik",
        image : "images/razor.png",
        taille : 1.77,
        poids : 63.0,
        pv : 150,
        attaque : 130,
        defense : 160,
        attaque_speciale : 150,
        defense_speciale : 30,
        vitesse : 70
    },
]

function afficherPokemons(){
    for (i = 0;i<pokemons.length; i++){
        console.log("Numéro : " + pokemons[i].numéro + " Nom : " + pokemons[i].nom)
    }
}

function rechercherParNumero(numero){
    for (i = 0;i<pokemons.length; i++){
        if(pokemons[i].numéro == numero){
            return pokemons[i];
        }
    }
    return undefined;
}

function rechercherParNom(nom){
    var tab = []
    for (i = 0;i<pokemons.length; i++){
        if(pokemons[i].nom.toLowerCase().includes(nom?.trim().toLowerCase())){
            tab.push(pokemons[i]);
        }
    }
    return tab;
}

function rechercherParType(type){
    var tab = []
    for (i = 0;i<pokemons.length; i++){
        if(type != null && (pokemons[i].type1.toLowerCase() == type?.trim().toLowerCase() || pokemons[i].type2?.toLowerCase() == type?.trim().toLowerCase())){
            tab.push(pokemons[i]);
        }
    }
    return tab;
}

function obtenirNoms(){
    var pokemon = []
    for (i = 0;i<pokemons.length; i++){
        pokemon.push(pokemons[i].nom);
    }
    return pokemon;
}

function afficherDetails(numero){
    var pokemon =[]
    for (i = 0;i<pokemons.length; i++){
        if(pokemons[i].numéro == numero){
            pokemon = pokemons[i]
        }
    }
    if(pokemon == undefined){
        console.log("Ce numéro n'existe pas");
        return;
    }
    console.log("Nom : " + pokemon?.nom + "\nNuméro : " + pokemon?.numéro + " \nType : " + pokemon?.type1 + (pokemon?.type2!=null ? "/"+ pokemon?.type2 : "")  + "\nTaille : " + pokemon?.taille + "m" + "\nPoids : " + pokemon?.poids + "kg" + "\nPV : " + pokemon?.pv + "\nAttaque : " + pokemon?.attaque + "\nDéfense : " + pokemon?.defense)
}
