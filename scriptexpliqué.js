
const recupnb = document.querySelectorAll('#nb');                           //
const recupoperator = document.querySelectorAll('#nboperator1');            //
const recupoperatorend = document.querySelector('#nboperatorend');         // sélectionne les input suivant -#nb: tous les caractères numériques et la virgule
                                                                            // -#nboperator1 : tout les opérateur
                                                                            // -#nboperatorend : l'opérateur =

var numberscatch = [];                                                      // déclaration global scope d'un tableau qui stock les chaines de caractère récupérées                                                                 

const reinit = document.querySelector('#reinit');                           // bouton de réinitialisation

recupnb.forEach(recupnb => {                                                // pour chaque élément récupéré par le query all, associe l'action suivante sur un click
    recupnb.addEventListener('click', function(){                           // stockage du caractère dans le tableau, affichage du tableau par une concaténation de tous ses élément
        numberscatch.push(recupnb.value);                                   // avec la fonction join()
        document.querySelector('#writedisplay').innerHTML = numberscatch.join('');
    })
});

recupoperator.forEach(recupoperator => {                                    // même chose avec les opérateurs
    recupoperator.addEventListener('click', function(){
        numberscatch.push(recupoperator.value);
        document.querySelector('#writedisplay').innerHTML = numberscatch.join('');
        
    })
});

reinit.addEventListener('click', function(){
    numberscatch = [];                                                                          // le tableau se vide quand on appuie sur C
    document.querySelector('#writedisplay').innerHTML = "0" + numberscatch.join('');
})


recupoperatorend.addEventListener('click', function(){                      // si l'opérateur est un =, on traite la chaine de caractères composé de chiffres,de virgules
numberscatch = numberscatch.map(item => item.replace(',', '.'));            // et d'opérateurs. On commence par remplacer toutes les virgules grace à la fonction map()
                                                                            // puis on concatène tout les élément du tableau et on le stock une variable qui contiendra une 
                                                                            // une chaine de caractère correspondante à cet exemple : "1.5+1.5"
let operation = numberscatch.join('');

try {                                                                           // on utilise la fonction eval() qui va interpréter la chaine de caractère comme une opération
  const result = eval(operation);                                               // mathématique et on stock le résultat dans une constante "result".

  document.querySelector('#output').innerHTML = result;                   // affichage du résultat
} catch (error) {
  console.error("Invalid operation:", error);                                   // renvoie d'une erreur en cas de mauvais input
}
})

    