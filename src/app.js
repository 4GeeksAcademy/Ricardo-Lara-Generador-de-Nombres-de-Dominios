import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function () {
//   let pronoun = ['the', 'our'];
//   let adj = ['great', 'big'];
//   let noun = ['jogger', 'racoon'];
//   let dom = ['.com', '.net'];
//   let dominiosGenerados = '';

//   for (let i = 0; i < pronoun.length; i++) {
//     for (let j = 0; j < adj.length; j++) {
//       for (let k = 0; k < noun.length; k++) {
//         for (let p = 0; p < dom.length; p++) {
//           let dominios = pronoun[i] + adj[j] + noun[k] + dom[p];
//           console.log(dominios);

//            dominiosGenerados += dominios + '<br>';
//         }
//       }
//     }
//   }

//   document.getElementById('dominio').innerHTML = dominiosGenerados;
// }

window.onload = function () {
  const pronouns = ["the", "our"];
  const adjectives = ["great", "big"];
  const nouns = ["jogger", "racoon"];
  const domainNames = [".com", ".net"];
  let generatedDomains = "";

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let p = 0; p < domainNames.length; p++) {
          let domains = pronouns[i] + adjectives[j] + nouns[k] + domainNames[p];
          console.log(domains);

          generatedDomains += domains + "<br>";
        }
      }
    }
  }
}
