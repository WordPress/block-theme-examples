const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const themeName = 'block-theme-examples'

const createZipFromFolder = () => {
  const rootPath = process.cwd();
  const themeExample = process.argv[2];

  const sourceFolderPath = path.join(rootPath, `${themeName}`)
  const destinationFolderPath = path.join(rootPath, "zips", `${themeExample}`)
  if (!fs.existsSync(destinationFolderPath)) {
    fs.mkdirSync(destinationFolderPath, { recursive: true });
  }
  const output = fs.createWriteStream(path.join(destinationFolderPath, `${themeName}.zip`) )

  const archive = archiver('zip', {
      zlib: { level: 9 } // set compression level to the highest
  })

  archive.pipe(output)
  archive.directory(sourceFolderPath, false)
  archive.finalize()
}

createZipFromFolder();