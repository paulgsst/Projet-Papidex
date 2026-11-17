import {rechercherParNumero  } from "./pokedex.js";

const params = new URLSearchParams(window.location.search);
const numero = Number(params.get("id"));
const pokemon = rechercherParNumero(numero);
console.log(pokemon)

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
        divNom.setAttribute("id", "nom");
        const num = document.createElement("h3");
        num.textContent = pokemon?.numéro;
        num.id = "n";
        const nom = document.createElement("h2");
        nom.textContent = pokemon?.nom;
        divNom.appendChild(num);
        divNom.appendChild(nom);

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
        pvSpan.className = "stat-nomx";
        pvSpan.textContent = "PV";
        pvDiv.appendChild(pvSpan);
        pvDiv.appendChild(pvP);

         const atqDiv = document.createElement("div");
        atqDiv.className = "statx";
        const atqP = document.createElement("p");
        atqP.id = "atq";
        const atqSpan = document.createElement("span");
        atqSpan.className = "stat-nomx";
        atqSpan.textContent = "Attaque";
        atqDiv.appendChild(atqSpan);
        atqDiv.appendChild(atqP);

         const defDiv = document.createElement("div");
        defDiv.className = "statx";
        const defP = document.createElement("p");
        defP.id = "def";
        const defSpan = document.createElement("span");
        defSpan.className = "stat-nomx";
        defSpan.textContent = "Défense";
        defDiv.appendChild(defSpan);
        defDiv.appendChild(defP);



        divInfoPokemon.appendChild(divNom);
        divInfoPokemon.appendChild(divType);
        divInfoPokemon.appendChild(taille);
        divInfoPokemon.appendChild(poids);
        divInfoPokemon.appendChild(pvDiv);
        divInfoPokemon.appendChild(atqDiv);
        divInfoPokemon.appendChild(defDiv);
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
 document.getElementById("nom").textContent = pokemon?.nom;
 document.getElementById("type1").textContent = pokemon?.type1;
 if(pokemon?.type2 != null){
    document.getElementById("type2").textContent = pokemon?.type2;
 }
 document.getElementById("image").src = pokemon?.image;
 document.getElementById("pv").textContent = pokemon?.pv;
 document.getElementById("atq").textContent = pokemon?.attaque;
 document.getElementById("def").textContent = pokemon?.defense;
 document.getElementById("poids").textContent = pokemon?.poids + " kg";
 document.getElementById("taille").textContent = pokemon?.taille + " m";

} else {
 document.getElementById("nom").textContent = "Pokémon introuvable";
}
