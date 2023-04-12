document.addEventListener('DOMContentLoaded', function() {


    //Exercice 1.1
    console.log("Exercice 1.1");

    // a)
    console.log("a)");
    const personne = {
        nom: "Second",
        prenom: "Noa",
        age: 19,
        taille: 190
    };

    //b)
    console.log("b)");
    const personne2 = {};
    personne2.nom = "Second";
    personne2.prenom = "MiniNoa";
    personne2.age = 17;
    personne2.taille = 186;

    // c)
    console.log("c)");
    const x = personne;
    x.age = 35;
    console.log(personne.age);

    //Exercice 1.2
    console.log("Exercice 1.2");

    //a)
    console.log("a)");
    console.log(personne.nom + "\n" + personne.prenom + "\n" + personne.age + "\n" + personne.taille);
    console.log(personne['nom'] + "\n" + personne['prenom'] + "\n" + personne['age'] + "\n" + personne['taille']);
    console.log(`${personne['nom']}\n${personne['prenom']}\n${personne['age']}\n${personne['taille']}`);

    //b)
    console.log("b)");
    for (let attribut in personne) {
        console.log(`${personne[attribut]}`);
    }

    //c)
    console.log("c)");
    personne.poids = 78;
    console.log(personne.poids);

    //d)
    console.log("d)");
    delete personne.poids;

    //Exercice 1.3
    console.log("Exercice 1.3");

    //a)
    console.log("a)");
    personne.sports = {
        sport1: "Water-polo",
        sport2: "Tir à l'arc olympique",
        sport3: "Musculation"
    };

    //b)
    console.log("b)");
    console.log(personne.sports.sport1);
    console.log(personne.sports.sport2);
    console.log(personne.sports.sport3);

    console.log(personne['sports']['sport1']);
    console.log(personne['sports']['sport2']);
    console.log(personne['sports']['sport3']);

    //c)
    console.log("c)");
    for (let sport in personne.sports) {
        console.log(`${sport} = ${personne.sports[sport]}`);
    }  

    //d)
    console.log("d)");
    personne.sports = [
        {nom: "Water-polo", equipements: ["Eau", "Ballon"]},
        {nom: "Tir à l'arc olympique", equipements: ["Arc olympique", "Flèches", "Palette", "Carquois"]},
        {nom: "Musculation", equipements: ["Straps", "Gourde", "Carte"]}
    ];
    for (let sport in personne.sports) {
        console.log(personne.sports[sport].nom);
        for (let equipement in personne.sports[sport].equipements) {
            console.log(` ⨀ ${personne.sports[sport].equipements[equipement]}`);
        }
    }

    //Exercice 1.4
    console.log("Exercice 1.4");

    //a)
    console.log("a)");
    personne.qui = function() {
        console.log(`Je suis ${this.prenom} ${this.nom}`);
    }
    personne.qui();

    //b)
    console.log("b)");
    personne.quimaj = function() {
        console.log(`JE SUIS ${this.prenom.toUpperCase()} ${this.nom.toUpperCase()}`);
    }
    personne.quimaj();

    //Exercice 1.5
    console.log("Exercice 1.5");

    //a)
    console.log("a)");
    const div = document.createElement('div');
    for (const attribut in personne) {
        const paragraphe = document.createElement('p');
        if(attribut == "sports") {            
            for (let sport of personne[attribut]) {
                const SportParagraphe = document.createElement('p');
                SportParagraphe.textContent += sport.nom + " = " + sport.equipements; 
                div.appendChild(SportParagraphe);
            }  
        } else if(attribut !== "qui" && attribut !== "quimaj") {
            paragraphe.textContent = `${attribut}: ${personne[attribut]}`;
            div.appendChild(paragraphe);
        }
    }
    console.log(div);
    document.body.appendChild(div);

    //b)
    console.log("b)");
    const divJson = document.createElement('div');
    divJson.textContent = JSON.stringify(personne);
    console.log(divJson);
    document.body.appendChild(divJson);

    //c)
    console.log("c)");
    personne.datenaissance = Date();
    console.log(JSON.stringify(personne));

    //d)
    console.log("d)");
    personne.age = function() {
        console.log(`Age = ${this.age}`);
    }
    console.log(JSON.stringify(personne));


});