console.log('***** Music Collection *****');
let collection = [];

function addToCollection(titleNew, artistNew, yearPublishedNew, newTracks) {
  let newCollectionObject = {
    title: titleNew,
    artist: artistNew,
    yearPublished: yearPublishedNew,
    tracks: newTracks,
  };
  collection.push(newCollectionObject);
  return newCollectionObject;
}

console.log(
  addToCollection('Piano Man', 'Billy Joel', 1973, [
    "Travelin' Prayer",
    'Piano Man',
    "Ain't No Crime",
    "You're My Home",
  ])
);
console.log(
  addToCollection('Hunky Dory', 'David Bowie', 1971, [
    'Changes',
    'Oh! You Pretty Things',
    'Eight Line Poem',
    'Life On Mars',
  ])
);
console.log(
  addToCollection('Greatest Hits', 'Frank Sinatra', 1950, [
    'Strangers in the Night',
    'Summer Wind',
    'It was a Very Good Year',
    'Somewhere in Your Heart',
  ])
);
console.log(
  addToCollection('Lungs', 'Florence and the Mchine', 2010, [
    'Dog Days are over',
    'RabbitHeart',
    "Im' not calling you a liar",
    'Howl',
  ])
);
console.log(
  addToCollection('Dear Agony', 'Breaking Benjamin', 2009, [
    'Fade Away',
    'I will not bow',
    'Crawl',
    'Give me a sign',
  ])
);
console.log(
  addToCollection('Back from the Dead', 'Halestorm', 2022, [
    'Back from the Dead',
    'Wicked Ways',
    'Strange Girl',
    'Brightside',
  ])
);
console.log(collection);

function showCollection(arrParameter) {
  console.log(arrParameter.length);
  for (let i = 0; i < arrParameter.length; i++) {
    console.log(
      arrParameter[i].title,
      'by',
      arrParameter[i].artist,
      'published in',
      arrParameter[i].yearPublished,
      ':'
    );
    for (let index = 0; index < arrParameter[i].tracks.length; index++) {
      console.log(i + 1, '.', arrParameter[i].tracks[index]);
    }
  }
  return 'showCollection Function Completed';
}

console.log(showCollection(collection));

function findByArtist(artistString) {
  let artistArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artistString) {
      artistArr.push(collection[i]);
    }
  }
  return artistArr;
}

console.log(findByArtist('Halestorm'));
console.log(findByArtist('Cheap Trick'));

//Stretch Goals
function search(inputParameter, trackName) {
  let finalArr = [];
  let errArr = [];
  for (let i = 0; i < collection.length; i++) {
    errArr.push(collection[i].title);
  }
  if (
    inputParameter === undefined ||
    Object.keys(inputParameter).length === 0
  ) {
    return errArr;
  }

  for (let i = 0; i < collection.length; i++) {
    if (
      inputParameter.artist === collection[i].artist &&
      inputParameter.year === collection[i].yearPublished &&
      collection[i].tracks.indexOf(trackName) >= 0
    ) {
      finalArr.push(collection[i]);
    }
  }
  return finalArr;
}
console.log(collection);
console.log(search({ artist: 'Halestorm', year: 2022 }, 'Wicked Ways'));
console.log(
  search({ artist: 'Florence and the Mchine', year: 2010 }, 'Happiness')
);
console.log(search({ artist: 'Ray Charles', year: 1957 }));
console.log(search());
console.log(search({}));

// Question, are we creating a search engine that checks for ALL search criteria to match, or only a certain amount?
//Question, are the search inputs completed objects with the properties?
