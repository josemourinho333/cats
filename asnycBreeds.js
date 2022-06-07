// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = (breed, functionToRunWhenThingsAreDone) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, { encoding: 'utf-8' }, (err, data) => {
    console.log(`In readFile's Callback: it has the data.`);
    if (!err) {
      return functionToRunWhenThingsAreDone(data);
    }

    return functionToRunWhenThingsAreDone(undefined);
  });
};

module.exports = breedDetailsFromFile;