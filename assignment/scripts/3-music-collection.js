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
}

console.log(showCollection(collection));
