const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const countries = [];

function loadCountriesData() {
  return new Promise((resolve, reject) => {
    try {
      fs.createReadStream(
        path.join(__dirname, "..", "data", "countries_of_the_world.csv")
      )
        .pipe(csv())
        .on("data", (data) => {
          countries.push(data);
        })
        .on("error", (err) => {
          console.log(err);
          reject(err);
        })
        .on("end", () => {
          console.log(
            `Data base contains ${countries.length} countriies entry`
          );
        });
    } catch (error) {
      console.error(`Got an error trying to read the file: ${error.message}`);
      resolve();
    }
  });
}

module.exports = { loadCountriesData, countries };
