const AdmZip = require("adm-zip");

async function createZipArchive() {
  const zip = new AdmZip();
  const outputFile = "block-theme-examples.zip";
  zip.addLocalFolder("./block-theme-examples");
  zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
}

createZipArchive();