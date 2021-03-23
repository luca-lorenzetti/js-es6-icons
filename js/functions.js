// FUNCTIONS

// FUNZIONE PER GENERARE UN NUMERO CASUALE
const getNumRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// FUNZIONE PER GENERARE UN COLORE CASUALE
const getColorRandom = () => {
  const base = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += base[getNumRandom(0, 15)];
  }

  return color;
}

// FUNZIONE RITORNA UN ARRAY DI CATEGORIE CON COLORI
const convertToObject = (array) => {

  array.forEach((element, index) => {

    array[index] = {
      name: element[0].toUpperCase() + element.slice(1),
      color: getColorRandom()
    }
  });
}

// FUNZIONE CHE STAMPA NELLA SELECT LE OPZIONI DELLE CATEGORIE
const printCategories = (selectFilter, categories) => {
  categories.forEach(element => {
    $(selectFilter).append(`<option value='${element.name}'>${element.name}</option>`)
  });
};

// FUNZIONE CHE RESTITUISCE IL COLORE DELLA CATEGORIA
const getColorCategory = (category, categories) => {
  let color = "";

  categories.forEach(element => {
    if (category.toLowerCase() == element.name.toLowerCase()) {
      color = element.color;
    }
  });

  return color;
};

// FUNZIONE PER STAMPARE LE ICONE
const printIcons = (icons, filter, iconsDiv) => {
  let html = "";
  let iconsToPrint = [];

  // Controllo che il filtro non sia su all
  if (filter != "") {
    iconsToPrint = icons.filter((element) => {
      return element = element.category.toLowerCase() === filter.toLowerCase();
    });
    //Stampo solo le icone della categoria selezionata
    iconsToPrint.forEach(element => {
      html += `<div>
                    <i class="${element.family} ${element.prefix}${element.name}" style="color: ${getColorCategory(element.category,categoriesList)}"></i>
                    <div class="title">${element.name}</div>
               </div>`;
    });
  }
  // stampo tutte le icone
  else {
    icons.forEach(element => {
      html += `<div>
                    <i class="${element.family} ${element.prefix}${element.name}" style="color: ${getColorCategory(element.category,categoriesList)}"></i>
                    <div class="title">${element.name}</div>
               </div>`;
    });
  }
  $(iconsDiv).append(html);
}