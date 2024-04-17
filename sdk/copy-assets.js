const ncp = require('ncp').ncp;
const path = require('path');
const fs = require('fs'); // Require file system module to check directories

ncp.limit = 16; // Set a limit for concurrent file copies

const rootDirectory = path.resolve(__dirname, '../..'); // Ensure this resolves to your project root correctly

const DIST_FOLDER = 'dist';
const DATA_FOLDER = 'data';

// Ensure that DIST_FOLDER exists, if not create it
const distPath = path.join(rootDirectory, DIST_FOLDER);
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

const foldersToCopy = [
    { sourceFolder: DATA_FOLDER, destinationFolder: DATA_FOLDER },
];

foldersToCopy.forEach(({ sourceFolder, destinationFolder }) => {
    const source = path.join(__dirname, sourceFolder);
    const destination = path.join(rootDirectory, DIST_FOLDER, destinationFolder);

    // Check if source exists before trying to copy
    if (!fs.existsSync(source)) {
        console.error(`Source directory does not exist: ${source}`);
        return; // Skip this iteration if the source does not exist
    }

    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log(`${sourceFolder} directory successfully copied to ${destination}`);
    });
});
