console.log('***** Music Collection *****');
let collection = [];

function addToCollection(titleNew, artistNew, yearPublishedNew) {
  let newCollectionObject = {
    title: titleNew,
    artist: artistNew,
    yearPublished: yearPublishedNew,
  };
  collection.push(newCollectionObject);
  return newCollectionObject;
}

console.log(addToCollection('Piano Man', 'Billy Joel', 1973));
console.log(addToCollection('Hunky Dory', 'David Bowie', 1971));
console.log(addToCollection('Greatest Hits', 'Frank Sinatra', 1950));
console.log(addToCollection('Lungs', 'Florence and the Mchine', 2010));
console.log(addToCollection('Dear Agony', 'Breaking Benjamin', 2009));
console.log(addToCollection('Back from the Dead', 'Halestorm', 2022));
console.log(collection);

function showCollection(arrParameter) {
  console.log(arrParameter.length);
  for (let i = 0; i < arrParameter.length; i++) {
    console.log(
      arrParameter[i].title,
      'by',
      arrParameter[i].artist,
      'published in',
      arrParameter[i].yearPublished
    );
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
function search(inputParameter) {
  let finalArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (
      inputParameter.artist === collection[i].artist &&
      inputParameter.year === collection[i].yearPublished
    ) {
      finalArr.push(collection[i]);
    } else if (inputParameter.artist === '' && inputParameter.year === '') {
      finalArr.push(collection[i].title);
    }
  }
  return finalArr;
}
console.log(collection);
console.log(search({ artist: 'Halestorm', year: 2022 }));
console.log(search({ artist: 'Ray Charles', year: 1957 }));
console.log(search({ artist: '', year: '' }));
