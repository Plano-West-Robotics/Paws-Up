const fs = require('fs');

const readFileAndExtractWords = (filePath) => {
  try {

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Split the content into an array of words using commas as the delimiter
    const wordsList = fileContent.split(',');

    // Trim whitespace from each word
    const trimmedWordsList = wordsList.map((word) => word.trim());

    return trimmedWordsList;
  } catch (error) {
    console.error('Error reading file:', error.message);
    return null;
  }
};

const filePath = 'TEST.txt';

const wordsList = readFileAndExtractWords(filePath);

if (wordsList) {
  console.log('List of words:', wordsList);
}
