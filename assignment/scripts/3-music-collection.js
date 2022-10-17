console.log('***** Music Collection *****');
let collection = [];

function addToCollection(titleNew, artistNew, yearPublishedNew) {
  let newCollectionObject = {
    title: titleNew,
    artist: artistNew,
    yearPublished: yearPublishedNew,
  };
  collection.push(newCollectionObject);
  return 'Addition Completed';
}

console.log(addToCollection('Piano Man', 'Billy Joel', 1973));
console.log(collection);
