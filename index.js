// Création d'une variable cercle qui va regrouper TOUTES les div avec class = cercle
let cercle = document.querySelectorAll('.cercle');

// On fais une boucle pour parcourir la liste cercle 
for (let i = 0; i < cercle.length; i++) {
    // On ajoute une fonction au clique pour CHAQUE elements de cercle
    cercle[i].onclick = function() {
        // Création d'une variable qui va stocker l'id de la division sur lequel le click sera effectuer 
        let divCercle = this.id;
        // Contrainte que si l'element sur lequel on clique ne contiens pas la class active ->
        if (!this.classList.contains("active")) {
            // Pour chaque element de cercle[j]
            for (let j = 0; j < cercle.length; j++) {
                // On enleve la class active
                cercle[j].classList.remove("active");
                // Et on met le texte en display none 
                document.getElementById("texte_" + cercle[j].id).style.display = "none";
            }
            // On ajoute la classe Active
            this.classList.add("active");
            // On va cacher le texte d'introduction
            document.getElementById("intro").style.display = "none";
            // On affiche le texte correspondant à l'id du clique
            document.getElementById("texte_" + divCercle).style.display = "block";
        }
    }

}