const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const themeName = 'block-theme-examples'

const createZipFromFolder = () => {
  const rootPath = process.cwd();
  const themeExample = process.argv[2];

  const sourceFolderPath = path.join(rootPath, `${themeName}`)
  const destinationFolderPath = path.join(rootPath, "zips", `${themeExample}`)
  const destinationFile = path.join(destinationFolderPath, `${themeName}.zip`)
  if (!fs.existsSync(destinationFolderPath)) {
    fs.mkdirSync(destinationFolderPath, { recursive: true });
  }
  const output = fs.createWriteStream( destinationFile )

  const archive = archiver('zip', {
      zlib: { level: 9 } // set compression level to the highest
  })


  
  output.on('close', function() {
    console.log(`Created zips/${themeExample}/${themeName}.zip`);
    process.exit(0);
});

  // good practice to catch warnings (ie stat failures and other non-blocking errors)
  archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
      // log warning
    } else {
      // throw error
      throw err;
    }
  });
  
  // good practice to catch this error explicitly
  archive.on('error', function(err) {
    throw err;
  });

  archive.pipe(output)
  archive.directory(sourceFolderPath, false)
  archive.finalize()
}

createZipFromFolder();