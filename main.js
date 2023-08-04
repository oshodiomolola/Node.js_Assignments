let fs = require('fs');
const path = require('path');

const folderName = 'student';
const newPath = 'Names'
const fileName = 'user.js';
const newFileName = 'oshodi_omolola.js';

const filePath = path.join(folderName, fileName);

const currentFilePath = path.join(folderName, fileName);
const newFilePath = path.join(folderName, newFileName);
fs.rename(currentFilePath, newFilePath, (err) => {
  if (err) {
    console.error('Error renaming the file:', err);
  } else {
    console.log('File name updated successfully.');
  }
})

const fileContent = 'My name is Oshodi Omolola';

const myAge = 26;
const mySex = "Female";
const nationality = 'Nigerian';
const phoneNumber = '09127451780';
const stateOfOrigin = 'Lagos';
const learningTrack = 'Backend engineering';

const content = `${myAge}, ${mySex}, ${nationality}, ${phoneNumber}, ${stateOfOrigin}, ${learningTrack}`;

fs.rename(folderName, newPath, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Directory updated successfully!');
  }
});

fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error('Error updating the file:', err);
  } else {
    console.log('File updated successfully.');
  }
});



fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('File Content:');
    console.log(data);
  }
});

// const filePath = 'path/to/your/file.js';

fs.unlink(filePath, (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
  } else {
    console.log('File deleted successfully.');
  }
})



const directoryPath = 'path/to/your/directory';

fs.rmdir(directoryPath, (err) => {
  if (err) {
    console.error('Error deleting the directory:', err);
  } else {
    console.log('Directory deleted successfully.');
  }
});

