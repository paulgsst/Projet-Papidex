import {rechercherParNumero  } from "./pokedex.js";

const params = new URLSearchParams(window.location.search);
const numero = Number(params.get("id"));
const pokemon = rechercherParNumero(numero);
console.log(pokemon)

function couleurStat(stat){
        if(stat<50){
            return "red";
        }
        if (stat>=50 && stat<100){ 
            return "orange";
                }
        if (stat>=100 && stat<150){ 
            return "#fff700";
        }
        if (stat>=150 && stat<200){
            return "#62ff3a";
        }
        if (stat>=200){ 
            return "green";
        }
}

function afficherCarte(pokemon)
{
    if(pokemon != undefined){
    const grille = document.getElementById("grille");
    grille.replaceChildren();
        const carte = document.createElement("div");
        carte.setAttribute("class","casex");
        const divImage = document.createElement("div");
        const image = document.createElement("img");
        image.src = pokemon?.image;
        image.alt = pokemon?.nom;
        image.className = "img-pokemonx";
        image.id = "image"
        divImage.appendChild(image);
        
        const divInfoPokemon = document.createElement("div");
        divInfoPokemon.className ="info-pokemonx";

        const divNom = document.createElement("div");
        divNom.className = "nomx";
        divNom.setAttribute("id", "nomx");

        const num = document.createElement("div");
        num.textContent = pokemon?.numéro;
        num.id = "n";
        const nom = document.createElement("div");
        nom.textContent = pokemon?.nom;
        divNom.appendChild(num);
        divNom.appendChild(nom);

        if(pokemon?.forme?.genre_de_forme != undefined){
            const boutonForme = document.createElement("div");
            boutonForme.className = "bouton-forme";
            const formeNormale = document.createElement('div');
            formeNormale.textContent = "Base";
            const formeSpeciale = document.createElement("div");
            formeSpeciale.textContent = pokemon.forme.genre_de_forme;
            boutonForme.appendChild(formeNormale);
            boutonForme.appendChild(formeSpeciale);
            divNom.appendChild(boutonForme);
        }

        const divType = document.createElement("div");
        divType.className = "typesx"
        const type1 = document.createElement("img");
        type1.id = "type1";
        type1.src = "images/"+pokemon?.type1.toLowerCase()+".png";
        type1.textContent = pokemon?.type1;
        divType.appendChild(type1);
        if(pokemon?.type2 != null){
            const type2 = document.createElement("img");
            type2.src = "images/"+pokemon?.type2.toLowerCase()+".png";
            type2.textContent = pokemon?.type2;
            type2.id = "type2";
            divType.appendChild(type2);
        }

        const taille = document.createElement("p");
        taille.id = "taille";
        const poids = document.createElement("p");
        poids.id = "poids";

        const pvDiv = document.createElement("div");
        pvDiv.className = "statx";
        const pvP = document.createElement("p");
        pvP.id = "pv";
        const pvSpan = document.createElement("span");
        const pvStatFond = document.createElement("div");
        pvStatFond.className = "stat-fondx";
        const pvStatBarre = document.createElement("div");
        pvStatBarre.className = "stat-valeurx";
        pvStatBarre.style = "width: "+(pokemon.pv/250)*100+"%; background: "+ couleurStat(pokemon.pv);
        pvStatFond.appendChild(pvStatBarre);
        pvSpan.className = "stat-nomx";
        pvSpan.textContent = "PV";
        pvDiv.appendChild(pvSpan);
        pvDiv.appendChild(pvP);
        pvDiv.appendChild(pvStatFond);

         const atqDiv = document.createElement("div");
        atqDiv.className = "statx";
        const atqP = document.createElement("p");
        atqP.id = "atq";
        const atqSpan = document.createElement("span");
        const atqStatFond = document.createElement("div");
        atqStatFond.className = "stat-fondx";
        const atqStatBarre = document.createElement("div");
        atqStatBarre.className = "stat-valeurx";
        atqStatBarre.style = "width: "+(pokemon.attaque/250)*100+"%; background: "+ couleurStat(pokemon.attaque);
        atqStatFond.appendChild(atqStatBarre);
        atqSpan.className = "stat-nomx";
        atqSpan.textContent = "Attaque";
        atqDiv.appendChild(atqSpan);
        atqDiv.appendChild(atqP);
        atqDiv.appendChild(atqStatFond);

         const defDiv = document.createElement("div");
        defDiv.className = "statx";
        const defP = document.createElement("p");
        defP.id = "def";
        const defSpan = document.createElement("span");
        const defStatFond = document.createElement("div");
        defStatFond.className = "stat-fondx";
        const defStatBarre = document.createElement("div");
        defStatBarre.className = "stat-valeurx";
        defStatBarre.style = "width: "+(pokemon.defense/250)*100+"%; background: "+ couleurStat(pokemon.defense);
        defStatFond.appendChild(defStatBarre);
        defSpan.className = "stat-nomx";
        defSpan.textContent = "Défense";
        defDiv.appendChild(defSpan);
        defDiv.appendChild(defP);
        defDiv.appendChild(defStatFond);

        const atqSpeDiv = document.createElement("div");
        atqSpeDiv.className = "statx";
        const atqSpeP = document.createElement("p");
        atqSpeP.id = "atqSpe";
        const atqSpeSpan = document.createElement("span");
        const atqSpeStatFond = document.createElement("div");
        atqSpeStatFond.className = "stat-fondx";
        const atqSpeStatBarre = document.createElement("div");
        atqSpeStatBarre.className = "stat-valeurx";
        atqSpeStatBarre.style = "width: "+(pokemon.attaque_speciale/250)*100+"%; background: "+ couleurStat(pokemon.attaque_speciale);
        atqSpeStatFond.appendChild(atqSpeStatBarre);
        atqSpeSpan.className = "stat-nomx";
        atqSpeSpan.textContent = "Attaque Spéciale";
        atqSpeDiv.appendChild(atqSpeSpan);
        atqSpeDiv.appendChild(atqSpeP);
        atqSpeDiv.appendChild(atqSpeStatFond);

        const defSpeDiv = document.createElement("div");
        defSpeDiv.className = "statx";
        const defSpeP = document.createElement("p");
        defSpeP.id = "defSpe";
        const defSpeSpan = document.createElement("span");
        const defSpeStatFond = document.createElement("div");
        defSpeStatFond.className = "stat-fondx";
        const defSpeStatBarre = document.createElement("div");
        defSpeStatBarre.className = "stat-valeurx";
        defSpeStatBarre.style = "width: "+(pokemon.defense_speciale/250)*100+"%; background: "+ couleurStat(pokemon.defense_speciale);
        defSpeStatFond.appendChild(defSpeStatBarre);
        defSpeSpan.className = "stat-nomx";
        defSpeSpan.textContent = "Défense Spéciale";
        defSpeDiv.appendChild(defSpeSpan);
        defSpeDiv.appendChild(defSpeP);
        defSpeDiv.appendChild(defSpeStatFond);

        const vitDiv = document.createElement("div");
        vitDiv.className = "statx";
        const vitP = document.createElement("p");
        vitP.id = "vit";
        const vitSpan = document.createElement("span");
        const vitStatFond = document.createElement("div");
        vitStatFond.className = "stat-fondx";
        const vitStatBarre = document.createElement("div");
        vitStatBarre.className = "stat-valeurx";
        vitStatBarre.style = "width: "+(pokemon.vitesse/250)*100+"%; background: "+ couleurStat(pokemon.vitesse);
        vitStatFond.appendChild(vitStatBarre);
        vitSpan.className = "stat-nomx";
        vitSpan.textContent = "Vitesse";
        vitDiv.appendChild(vitSpan);
        vitDiv.appendChild(vitP);
        vitDiv.appendChild(vitStatFond);
        

        divInfoPokemon.appendChild(divNom);
        divInfoPokemon.appendChild(divType);
        divInfoPokemon.appendChild(taille);
        divInfoPokemon.appendChild(poids);
        divInfoPokemon.appendChild(pvDiv);
        divInfoPokemon.appendChild(atqDiv);
        divInfoPokemon.appendChild(defDiv);
        divInfoPokemon.appendChild(atqSpeDiv);
        divInfoPokemon.appendChild(defSpeDiv);
        divInfoPokemon.appendChild(vitDiv);
        carte.appendChild(divImage);
        carte.appendChild(divInfoPokemon);
        grille.appendChild(carte);
    }
    else{
        const grille = document.getElementById("grille");
    grille.replaceChildren();

        const divNom = document.createElement("div");
        divNom.className = "nomx";
        divNom.setAttribute("id", "nom");
        const nom = document.createElement("h2");
        nom.textContent = pokemon?.nom;
        divNom.appendChild(nom);


        grille.appendChild(divNom);
    }
    
}

afficherCarte(pokemon);

if (pokemon != undefined) {
 document.getElementById("nomx").textContent = pokemon?.nom;
 document.getElementById("type1").textContent = pokemon?.type1;
 if(pokemon?.type2 != null){
    document.getElementById("type2").textContent = pokemon?.type2;
 }
 document.getElementById("image").src = pokemon?.image;
 document.getElementById("pv").textContent = pokemon?.pv;
 document.getElementById("atq").textContent = pokemon?.attaque;
 document.getElementById("def").textContent = pokemon?.defense;
 document.getElementById("atqSpe").textContent = pokemon?.attaque_speciale;
 document.getElementById("defSpe").textContent = pokemon?.defense_speciale;
 document.getElementById("vit").textContent = pokemon?.vitesse;
 document.getElementById("poids").textContent = pokemon?.poids + " kg";
 document.getElementById("taille").textContent = pokemon?.taille + " m";

} else {
 document.getElementById("nomx").textContent = "Pokémon introuvable";
}
