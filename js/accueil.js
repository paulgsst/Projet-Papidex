import { pokedex } from "./pokedex.js";

function afficherCartes(liste)
{
    const grille = document.getElementById("grille");
    grille.replaceChildren();
    liste.forEach((pokemon)=>
    {
        const carte = document.createElement("div");
        carte.setAttribute("class","case");
        const divImage = document.createElement("div");
        const image = document.createElement("img");
        image.src = pokemon.image;
        image.alt = pokemon.nom;
        image.className = "img-pokemon";
        divImage.appendChild(image);
        
        const divInfoPokemon = document.createElement("div");
        divInfoPokemon.className ="info-pokemon";

        const divNom = document.createElement("div");
        divNom.className = "nom";
        const num = document.createElement("h3");
        num.textContent = pokemon.numéro;
        num.id = "n";
        const nom = document.createElement("h2");
        nom.textContent = pokemon.nom;
        divNom.appendChild(num);
        divNom.appendChild(nom);

        const divType = document.createElement("div");
        divType.className = "type"
        const type1 = document.createElement("img");
        type1.src = "images/"+pokemon.type1.toLowerCase()+".png";
        type1.textContent = pokemon.type1;
        divType.appendChild(type1);
        if(pokemon.type2 != null){
            const type2 = document.createElement("img");
            type2.src = "images/"+pokemon.type2.toLowerCase()+".png";
            type2.textContent = pokemon.type2;
            divType.appendChild(type2);
        }

        const divDetail = document.createElement("div");
        divDetail.className="details";
        const lienDetail = document.createElement("a");
        lienDetail.id="details";
        lienDetail.href="details.html?id="+pokemon.numéro;
        const strongDetail = document.createElement("strong");
        strongDetail.textContent = "Voir les détails >";
        lienDetail.appendChild(strongDetail);
        divDetail.appendChild(lienDetail);

        divInfoPokemon.appendChild(divNom);
        divInfoPokemon.appendChild(divType);
        divInfoPokemon.appendChild(divDetail);
        carte.appendChild(divImage);
        carte.appendChild(divInfoPokemon);
        grille.appendChild(carte);
    }
)
}

afficherCartes(pokedex);

function rechercherParNom(nom){
    var tab = []
    for (var i = 0;i<pokedex.length; i++){
        if(pokedex[i].nom.toLowerCase().includes(nom?.trim().toLowerCase())){
            tab.push(pokedex[i]);
        }
    }
    return tab;
}

const champ = document.getElementById("recherche");
champ.addEventListener("input", () => {
    console.log("tet");
const liste = rechercherParNom(champ.value);
afficherCartes(liste);})
