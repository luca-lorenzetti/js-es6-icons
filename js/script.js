// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// 
// Milestone 2
// Coloriamo le icone per tipo
// 
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

// FUNCTIONS

// FUNZIONE PER GENERARE UN NUMERO CASUALE
let getNumRandom = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

// FUNZIONE PER GENERARE UN COLORE CASUALE
let getColorRandom = () => {
  const base = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += base[getNumRandom(0,15)]; 
  }

  return color;
}

// FUNZIONE RITORNA UN ARRAY DI CATEGORIE CON COLORI
let convertToObject = (array) =>{

  array.forEach( (element,index) => {
    
    array[index] = { name: element[0].toUpperCase()+element.slice(1), color: getColorRandom()}
  });
}

// FUNZIONE CHE STAMPA NELLA SELECT LE OPZIONI DELLE CATEGORIE
let printCategories = (selectFilter,categories) =>{
  categories.forEach(element => {
    $(selectFilter).append(`<option value='${element.name}'>${element.name}</option>`)
  });
};

// FUNZIONE CHE RESTITUISCE IL COLORE DELLA CATEGORIA
let getColorCategory = (category,categories) =>{
  let color = "";

  categories.forEach(element => {
    if( category.toLowerCase() == element.name.toLowerCase()){
      color = element.color;
    }
  });

  return color;
};

let printIcons = (icons,filter,iconsDiv) =>{
  let html = "";
  let iconToPrint = [];

// Controllo che il filtro non sia su all
    if( filter != ""){
       iconToPrint =  icons.filter( (element)=> {
        return element = element.category.toLowerCase() === filter.toLowerCase();
      });
      //Stampo solo le icone della categoria selezionata
      iconToPrint.forEach(element => {
        html += `<div>
                    <i class="${element.family} ${element.prefix}${element.name}" style="color: ${getColorCategory(element.category,categoriesList)}"></i>
                    <div class="title">${element.name}</div>
               </div>`;   


      });
    }
    else{// stampo tutte le icone
      icons.forEach(element => {
        html += `<div>
                    <i class="${element.family} ${element.prefix}${element.name}" style="color: ${getColorCategory(element.category,categoriesList)}"></i>
                    <div class="title">${element.name}</div>
               </div>`;   
      });
    }
    $(iconsDiv).append(html);  
}

let iconsDiv = $('.icons');
let selectFilter = $('#type');



/* ICONS */
const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

// Prendo tutte le categorie
const categoriesList = [];

icons.forEach( (element) => {
  if( !categoriesList.includes(element.category)){
    categoriesList.push(element.category);
  }
});

// Conversione categorie in oggetti
convertToObject(categoriesList);

//Stampo le categorie nella selection
printCategories(selectFilter,categoriesList);


 icons.forEach( (element)=> {

  let html = `<div>
                <i class="${element.family} ${element.prefix}${element.name}" style="color: ${getColorCategory(element.category,categoriesList)}"></i>
                <div class="title">${element.name}</div>
            </div>`;

            $(iconsDiv).append(html);        
});




$( selectFilter).change(function() {
  $(iconsDiv).html("");

  printIcons(icons,$(this).val(),iconsDiv)
});
