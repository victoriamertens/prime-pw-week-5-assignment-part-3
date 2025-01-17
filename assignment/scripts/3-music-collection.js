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

addToCollection('Piano Man', 'Billy Joel', 1973, [
  "Travelin' Prayer: 3:30 ",
  'Piano Man: 2:15',
  "Ain't No Crime:4:00",
  "You're My Home: 2:16",
]);

addToCollection('Hunky Dory', 'David Bowie', 1971, [
  'Changes: 2:30',
  'Oh! You Pretty Things: 3:11',
  'Eight Line Poem: 2:10',
  'Life On Mars: 2:00',
]);

addToCollection('Greatest Hits', 'Frank Sinatra', 1950, [
  'Strangers in the Night: 4:10',
  'Summer Wind: 5:11',
  'It was a Very Good Year: 2:30',
  'Somewhere in Your Heart: 1:00',
]);

addToCollection('Lungs', 'Florence and the Mchine', 2010, [
  'Dog Days are over: 1:15',
  'RabbitHeart: 3:44',
  "Im' not calling you a liar: 5:34",
  'Howl: 3:44',
]);

addToCollection('Dear Agony', 'Breaking Benjamin', 2009, [
  'Fade Away: 4:04',
  'I will not bow: 5:10',
  'Crawl: 3:22',
  'Give me a sign: 3:22',
]);

addToCollection('Back from the Dead', 'Halestorm', 2022, [
  'Back from the Dead: 4:11',
  'Wicked Ways: 3:32',
  'Strange Girl: 2:42',
  'Brightside: 3:33',
]);

console.log(collection); //To check what variable information is going into the function

function showCollection(collection) {
  console.log('Collection Length:', collection.length);

  for (let collectionItem of collection) {
    console.log(
      `${collectionItem.title} by ${collectionItem.artist} published in: ${collectionItem.yearPublished}` //Used Template literal
    );
    let songCounter = 1;
    for (let song of collectionItem.tracks) {
      console.log(`${songCounter}. ${song}`); //used Template literal
      songCounter++;
    }
  }

  return 'showCollection Function Completed';
}

console.log(showCollection(collection)); //Testing showCollection Function

function findByArtist(artistString) {
  let artistArr = [];

  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artistString) {
      artistArr.push(collection[i]);
    }
  }

  return artistArr;
}

console.log(findByArtist('Halestorm')); //Test true case
console.log(findByArtist('Cheap Trick')); //Test false case

//*******Stretch Goals*********
function search(searchObject, trackName) {
  let finalArr = [];
  let errArr = [];

  for (let i = 0; i < collection.length; i++) {
    errArr.push(collection[i].title);
  }

  if (searchObject === undefined || Object.keys(searchObject).length === 0) {
    return errArr;
  }

  for (let i = 0; i < collection.length; i++) {
    if (
      searchObject.artist === collection[i].artist &&
      searchObject.year === collection[i].yearPublished &&
      collection[i].tracks.indexOf(trackName) >= 0
    ) {
      finalArr.push(collection[i]);
    }
  }
  return finalArr;
}
console.log('Starting Collection is:', collection);
console.log(search({ artist: 'Halestorm', year: 2022 }, 'Wicked Ways')); //Testing ALL criteria present, should return all matching criteria

console.log(
  'Should return an empty array:',
  search({ artist: 'Florence and the Machine', year: 2010 }, 'Happiness') //Testing one non-matching criteria
);
console.log(
  'Should return an empty array:',
  search({ artist: 'Ray Charles', year: 1957 })
); //Testing no  matching criteria
console.log('Should return all albums:', search()); //Testing no input
console.log('Should return all albums:', search({})); //Testing empty object
