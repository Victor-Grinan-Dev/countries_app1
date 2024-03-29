const csv = require("csv-parser");
const fs = require("fs");
const dirPath = require("path").dirname(require.main.filename);
// const filter = require("../functions/filter/filter");
const filteredCountries = [];

const file_path = "/data/countries_of_the_world.csv";
// const regex = /^([cC])\w*$/i;

const presetEval = {
  birthRate:
    "Number(country['Birthrate']) > 20 && Number(country['Birthrate']) < 40",
  birthRateNoData: "country['Birthrate'] === ''",
  birthDeath:
    "country['Infant mortality (per 1000 births)'] !== '' && Number(country['Infant mortality (per 1000 births)']) < 1000 ",
  birthDeathNoData: "country['Infant mortality (per 1000 births)'] === ''",
  population: "Number(country['Population']) > 100000000",
  //not working
  namesStartsWith: "/^([rR])w*$/.test(country['Country'])",
};
const toEval = presetEval.population;

function checkCoutryCriteria(country) {
  if (eval(toEval)) return country;
}

async function readFile(filePath) {
  try {
    fs.createReadStream(dirPath + filePath)
      .pipe(csv())
      .on("data", (data) => {
        if (checkCoutryCriteria(data)) {
          filteredCountries.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
      })
      .on("end", () => {
        console.log(
          `Found ${filteredCountries.length} countries with filter (${toEval})`
        );
      });
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

readFile(file_path);

module.exports = { filteredCountries };
