const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const destinationContainerFolder = path.join(process.cwd(), "_zips")

module.exports = folderName => {
  const rootPath = process.cwd();
// const themeExample = process.argv[2];

  const sourceFolderPath = path.join(rootPath, folderName)
  //const destinationFolderPath = path.join(rootPath, "zips", `${themeExample}`)
  const destinationFile = path.join(destinationContainerFolder, `${folderName}.zip`)

  const output = fs.createWriteStream( destinationFile )

  
  const archive = archiver('zip', {
    zlib: { level: 9 } // set compression level to the highest
  })
  
  archive.on('end', function() {
    console.log(`Zip for ${folderName} has been created`);
  });
  
  archive.on('error', function(err) {
    console.log(`Something went wrong while creating zip for ${folderName}`);
    console.log(err);
  });

  archive.pipe(output)
  archive.directory(sourceFolderPath, false)
  archive.finalize()
}