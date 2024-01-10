const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const allCountries = [];

async function purifyCountries() {
  return allCountries.filter((item, index) => arr.indexOf(item) === index);
}

async function loadCountriesData() {
  // return new Promise((resolve, reject) => {
  try {
    fs.createReadStream(
      path.join(__dirname, "..", "data", "countries_of_the_world.csv")
    )
      .pipe(csv())
      .on("data", (data) => {
        if (allCountries.length < 227) allCountries.push(data);
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`Database contains ${allCountries.length} countries entry`);
      });
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
    resolve();
  }
  // });
}
loadCountriesData();
purifyCountries();

module.exports = { loadCountriesData, allCountries };
