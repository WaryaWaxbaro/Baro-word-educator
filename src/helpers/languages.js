import uk from '../img/flags/united-kingdom.svg';
import fi from '../img/flags/finland.svg';
import so from '../img/flags//somalia.svg';

export const languages = [
  {name: "english", image: uk, code: "en"},
  {name: "finnish", image: fi, code: "fi"},
  {name: "somali", image: so, code: "so"}
];

export const pageName = {
  EN: {
    fruits: "fruits",
    wildanimals: "wild animals"
  },
  FI: {
    fruits: "hedelmät",
    wildanimals: "villieläimet"
  },
  SO: {
    fruits: "khudaar",
    wildanimals: "duur joogto"
  }
};

export const aboutText = {
  EN: {
    text: "Baro is an application that displays images and it's the corresponding names in different languages.",
    heading: "instructions",
    instructions: [
      "Click on the desired category for example fruits or wild animals.",
      "Press the spacebar to change the images and see different images and words.",
      "To change a language select the desired language from the language option menu and the image name will also change automatically to that specific language, that has been selected."
    ]
  },
  FI: {
    text: "Baro on sovellus, joka näyttää kuvat ja niiden vastaavat nimet eri kielellä.",
    heading: "käyttöohjeet",
    instructions: [
      "Klikkaa haluttua ryhmä esimerkiksi hedelmät tai villieläimet",
      "Paina välilyöntiä vaihtamaan kuvia ja niiden vastaavat nimet.",
      "Voi vaihtaa kieltä, valitse haluamasi kieli kielivalintavalikosta, sitten kuvan nimi vaihtuu automaattisesti kyseiseen kieleen."
    ]
  },
  SO: {
    text: "Baro waa barnaamaj kugu tusaayo luqada kala duwan sawiro iyo magacyadooda.",
    heading: "sida lo isticmaalo",
    instructions: [
      "Klik ku sii qeebta aad rabtid sida khudaarta mise duur jogtada.",
      "Spees ka taabo si sawirada iyo magacyadooda isu badalaan",
      "Luqada waad badali kartaa. Kabadal meesha luqata la ga badalo kadibna erayga sawirkana toos ayuu isugu badalayaa luqadii aad dooratay."
    ]
  }
}