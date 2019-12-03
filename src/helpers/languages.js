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
    text: "Baro is an application that displays images and it's the corresponding names in different languages."
  },
  FI: {
    text: "Baro on sovellus, joka näyttää kuvat ja niiden vastaavat nimet eri kielellä."
  },
  SO: {
    text: "Baro waa barnaamaj kugu tusaayo luqada kala duwan sawiro iyo magacyadooda."
  }
}