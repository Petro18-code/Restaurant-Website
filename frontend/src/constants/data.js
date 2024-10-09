import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '€56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '€59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '€44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '€31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '€26',
    tags: 'IE | 750 ml',
  },
];

const whiteWines = [
  {
    title: 'CHARDONNAY',
    price: '€28',
    tags: 'FR | 750 ml',
  },
  {
    title: 'PINOT GRIGIO',
    price: '€28',
    tags: 'FR | 750 ml',
  },
  {
    title: 'PINOT GRIGIO',
    price: '€14',
    tags: 'FR | 375 ml',
  },
  {
    title: 'FRASCATI',
    price: '€24',
    tags: 'IT | 750 ml',
  },
  {
    title: 'FERRARI',
    price: '€45',
    tags: 'IT | 750 ml',
  },
  {
    title: 'ROSE',
    price: '€28',
    tags: 'IT | 750 ml',
  },
  {
    title: 'CHAMPAGNE G.H.MUMM',
    price: '€120',
    tags: 'IT | 750 ml',
  },
];

const redWines = [
  {
    title: 'CHIANTI',
    price: '€24',
    tags: 'IT | 750 ml',
  },
  {
    title: 'BRUNELLO DI MONTALCINO',
    price: '€75',
    tags: 'IT | 750 ml',
  },
  {
    title: 'LAMBRUSCO',
    price: '€24',
    tags: 'IT | 750 ml',
  },
  {
    title: 'MERLOT',
    price: '€24',
    tags: 'IT | 750 ml',
  },
  {
    title: 'ROSSO DI MONTALCINO',
    price: '€38',
    tags: 'IT | 750 ml',
  },
  {
    title: 'SHIRAZ',
    price: '€28',
    tags: 'IT | 750 ml',
  },
  {
    title: 'TIGNANELLO',
    price: '€400',
    tags: 'IT | 750 ml',
  },
]

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '€8',
    tags: 'Aperol | Prosecco | soda',
  },
  {
    title: "Bellini",
    price: '€8',
    tags: 'Peach juice | Prosecco | Soda ',
  },
  {
    title: 'Daiquiri',
    price: '€10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '€10',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '€10',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const drinks = [
  {
    title: 'ACQUA MINERALE',
    price: '€3,5',
    tags: 'WATER',
  },
  {
    title: 'SUCCO DI FRUTTA',
    price: '€4,5',
    tags: 'FRUIT JUICE',
  },
  {
    title: "SPREMUTA D'ARANCIA",
    price: '€6',
    tags: 'FRESH ORANGE JUICE',
  },
  {
    title: 'BIRRA ANALCOLICA',
    price: '€6',
    tags: 'NON-ALCOOLIC BEER',
  },
  {
    title: 'BIRRA ALLA SPINA',
    price: '€7',
    tags: 'DRAUGHT BEER',
  },
  {
    title: 'BIBITE IN LATINA',
    price: '€4,5',
    tags: 'SOFT DRINKS (COCA COLA, FANTA, SPRITE)',
  },
]



const pasta = [
  {
    title: 'RAVIOLI CON PACHINO E PESTO',
    price: '€13',
    tags: 'RAVIOLI WITH CHERRY TOMATOES AND PESTO SAUCE',
  },
  {
    title: 'LASAGNA AL RAGU ALLA BOLOGNESE',
    price: '€10',
    tags: 'LASAGNA WITH MEAT SAUCE',
  },
  {
    title: 'LASAGNA PORCINI E TARTUFO',
    price: '€16',
    tags: 'LASAGNA WITH PORCINI MUSHROOMS AND TRUFFLE',
  },
  {
    title: 'TAGLIATELLE CON RAGU ALLA BOLOGNESE',
    price: '€12',
    tags: 'TAGLIATELLE WITH MEAT SAUCE',
  },
  {
    title: 'SPAGHETTI CON LE POLPETTE',
    price: '€13',
    tags: 'SPAGHETTI WITH MEATBALLS',
  },
  {
    title: 'TROFIE AL PESTO',
    price: '€10',
    tags: 'TROFIE WITH PESTO SAUCE',
  },
  {
    title: 'GNOCCHI ALLA SORRENTINA',
    price: '€10',
    tags: 'GNOCCHI WITH TOMATO SAUCE MOZZARELLA AND BASIL',
  },
  {
    title: 'BUCATINI ALLA AMATRICIANA',
    price: '€10',
    tags: 'BUCATINI WITH BACON, TOMATO SAUCE AND PECORINO CHEESE',
  },
  {
    title: 'SPAGHETTI ALLA CARBONARA',
    price: '€10',
    tags: 'SPAGHETTI WITH BACON, EGG SAUCE, PECORINO CHEESE AND BLACK PEPPER',
  },
  {
    title: 'TONARELLI CACIO E PEPE',
    price: '€10',
    tags: 'TONARELLI WITH BLACK PEPPER AND PECORINO CHEESE',
  },
  {
    title: 'RISOTTO AI FRUTTI DI MARE CON PACHINO',
    price: '€14',
    tags: 'SEAFOOD RICE WITH CHERRY TOMATOES',
  },
  {
    title: 'SPAGHETTI ALLE VONGOLE',
    price: '€14',
    tags: 'SPAGHETTI WITH CLAMS',
  },
  {
    title: 'SCIALLATIELLI AI FRUTTI DI MARE (SPIGOLA O ORATA)',
    price: '€28',
    tags: 'MACARONI WITH SEAFOOD (SEA BASS OR SEA BREAM)',
  },
  {
    title: 'FETTUCINE ALFREDO CON POLLO',
    price: '€14',
    tags: 'CHICKEN ALFREDO FETTUCINE',
  },
  {
    title: 'FETTUCINE AL POMODORO E BASILICO',
    price: '€10',
    tags: 'FETTUCINE WITH TOMATO SAUCE AND BASIL',
  },
  {
    title: 'lINGUINE AI FRUTTI DI MARE',
    price: '€14',
    tags: 'SEAFOOD LINUINE',
  },
];

const starters = [
  {
    title: 'BRUSCHETTA CON AGLIO OLIO E TARTUFO',
    price: '€6',
    tags: 'GARLIC BREAD WITH TRUFFLE',
  },
  {
    title: 'BRUSCHETTA ALLE MELANZANE',
    price: '€5',
    tags: 'EGGPLANT BRUSCHETTA WITH RICOTTA CHEESE',
  },
  {
    title: 'MISTO SALUMI E FORMAGGI AL MIELE',
    price: '€18',
    tags: 'MIXED COLD CUTS AND MIXED PLATTER OF CHEESE WITH HONEY',
  },
  {
    title: 'BURRATA',
    price: '€8',
    tags: 'BURRATA CHEESE',
  },
  {
    title: 'PROSCIUTTO E MELONE',
    price: '€12',
    tags: 'HAM AND MELON',
  },
  {
    title: 'INSALATA DI POLIPO',
    price: '€13',
    tags: 'OCTOPUS SALAD',
  },
  {
    title: 'SOUTE DI COZZE E VONGOLE',
    price: '€13',
    tags: 'CLAMS AND MUSSELS SAUTE',
  },
];

const fish = [
  {
    title: 'GRIGLIATA MISTA DI PESCE',
    price: '€26',
    tags: 'MIXED GRILLED FISH',
  },
  {
    title: 'SALMONE ALA GRIGLIA CON INSALATA DI FINOCCHI',
    price: '€15',
    tags: 'GRILLED SALMON WITH FENNEL ORANGE AND OLIVES SALAD',
  },
  {
    title: 'TRANCIO DI PESCE SPADA ALLA GRIGLIA',
    price: '€14',
    tags: 'SWORD FISH WITH TOMATO SALAD',
  },
  {
    title: 'BACCALA AL POMODORO',
    price: '€14',
    tags: 'CODFISH FISH WITH TOMATO SAUCE AND TOASTED BREAD',
  },
  {
    title: 'ZUPPA DI PESCE',
    price: '€24',
    tags: 'FISH SOUP',
  },
  {
    title: 'CALAMARI E GAMBERI FRITTI',
    price: '€18',
    tags: 'FRIED SQUID AND SHRIMPS',
  },
];

const meat = [
  {
    title: 'GRIGLIATA MISTA DI CARNE',
    price: '€26',
    tags: 'MIXED GRILLED MEAT',
  },
  {
    title: 'BISTECCA DI MANZO CON RUGHETTA',
    price: '€18',
    tags: 'BEEF STEAK WITH ROCKET SALAD',
  },
  {
    title: 'CODA ALLA VACCINARA',
    price: '€14',
    tags: 'BEEF TAIL ROMAN STYLE',
  },
  {
    title: 'COTOLLETTA DI POLLO CON PATATE',
    price: '€14',
    tags: 'SLICED CHICKEN BREAST WITH FRENCH FRIES',
  },
  {
    title: 'SCALOPPINA DI MAIALE AI FUNGHI',
    price: '€14',
    tags: 'SLICED PORK WITH MUSHROOMS',
  },
  {
    title: "FIORENTINA (ALL'ETTO)",
    price: '€8',
    tags: 'T-BONE STEAK BY THE WEIGHT FOR 100g',
  },
  {
    title: 'FILLETTO DI MANZO AL PEPPE VERDE',
    price: '€24',
    tags: 'BEEF FILLET WITH GREEN PEPPER SAUCE',
  },
  {
    title: 'SALTIMBOCCA DI VITELLA ALLA ROMANA',
    price: '€16',
    tags: 'VEAL ESCALOPE ROMAN STYLE WITH HAM AND SAGE',
  },
  {
    title: 'ABBACCHIO SCOTTADITO',
    price: '€16',
    tags: 'LAMB CHOPS ROMAN STYLE',
  },
  {
    title: 'TRIPPA ALLA ROMANA',
    price: '€14',
    tags: 'ROMAN TRADITIONAL MEAT DISH',
  },
];

const pizza = [
  {
    title: 'FOCACCIA',
    price: '€4',
    tags: 'FOCACCIA BREAD',
  },
  {
    title: 'MARINARA',
    price: '€7,5',
    tags: 'TOMATO SAUCE, OREGANO, GARLIC AND OIL',
  },
  {
    title: 'MARGHERITA',
    price: '€8',
    tags: 'TOMATO SAUCE, MOZZARELLA CHEESE',
  },
  {
    title: 'SICILIANA',
    price: '€9',
    tags: 'TOMATO SAUCE, ANCHOVIES, CAPERS',
  },
  {
    title: 'NAPOLETANA',
    price: '€9,5',
    tags: 'TOMATO SAUCE, MOZZARELLA CHEESE, ANCHOVIES',
  },
  {
    title: 'CAPRICCIOSA',
    price: '€11',
    tags: 'TOMATO SAUCE, MOZZARELLA CHEESE, CURED HAM, ARTICHOKES, MUSHROOMS',
  },
  {
    title: 'SUPER LASAGNA',
    price: '€10',
    tags: 'TOMATO SAUCE, MOZZARELLA CHEESE, RICOTTA, SALAMI',
  },
  {
    title: 'QUATRO FORMAGGI',
    price: '€10',
    tags: 'FOUR TYPES OF CHEESE',
  },
  {
    title: 'VEGETARIANA',
    price: '€10',
    tags: 'VEGETARIAN WITH MIXED VEGETABLES AND MOZZARELLA CHEESE',
  },
  {
    title: 'DIAVOLA',
    price: '€10',
    tags: 'TOMATO SAUCE, MOZZARELLA CHEESE, HOT SALAMI',
  },
];

const sideDishes = [
  {
    title: 'BRESAOLA RUGHETTA E PARMIGGIANO',
    price: '€12',
    tags: 'SMOKED BEEF ROCKET SALAD AND PARMESAN CHEESE',
  },
  {
    title: 'INSALATA GRECA',
    price: '€12',
    tags: 'LETTUCE, FETA CHEESE, ONIONS, CUCUMBERS',
  },
  {
    title: 'INSALATA CAESARE',
    price: '€13',
    tags: 'LETTUCE, CHICKEN BREAST, CAESAR SAUCE, TOASTED BREAD, GRANA FLAKES',
  },
  {
    title: 'CAPRESE',
    price: '€12',
    tags: 'BUFFALO MOZZARELLA CHEESE, TOMATOES, BASIL',
  },
  {
    title: 'PATATE FRITTE',
    price: '€6',
    tags: 'FRENCH FRIES',
  },
  {
    title: 'PATATE AL FORNO',
    price: '€6',
    tags: 'BAKED POTATOES',
  },
  {
    title: 'VERDURE DEL GIORNO',
    price: '€7',
    tags: 'GRILLED VEGETABLES',
  },
];

const desserts = [
  {
    title: 'TIRAMISU DELLA CASA',
    price: '€6',
    tags: 'HOME MADE TIRAMISU',
  },
  {
    title: 'CANNOLO ALLA SICILIANA',
    price: '€6',
    tags: 'PASTRY HORN FILLED WITH RICOTTA CHEESE AND PISTACHOS',
  },
  {
    title: 'PROFITEROLES',
    price: '€6',
    tags: 'CUSTARD FILLED CHOUX PASTRY BALL WITH CHOCOLATE TOPPING',
  },
  {
    title: 'MACEDONIA',
    price: '€6',
    tags: 'FRUIT SALAD',
  },
  {
    title: 'GELATO',
    price: '€6',
    tags: 'ICE CREAM',
  },
  {
    title: 'AFFOGATO',
    price: '€6',
    tags: 'ICE CREAM WITH WHISKEY OR COFFEE',
  },
];

export default { wines, cocktails, pasta, starters, fish, meat, pizza, sideDishes, redWines, desserts, whiteWines, drinks };
