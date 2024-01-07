const csv = require("csv-parser");
const fs = require("fs");
const dirPath = require("path").dirname(require.main.filename);
const filteredCountries = [];

const file_path = "/data/countries_of_the_world.csv";

async function readFile(filePath) {
  try {
    // const data = await fs.readFile(dirPath + filePath);
    // console.log(data.toString());
    await fs
      .createReadStream(dirPath + file_path)
      .pipe(csv())
      .on("data", (data) => filteredCountries.push(data))
      .on("end", () => {
        // console.log(filteredCountries);
        // [
        //   { NAME: 'Daffy Duck', AGE: '24' },
        //   { NAME: 'Bugs Bunny', AGE: '22' }
        // ]
      });
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

// function checkCoutryCriteria(country) {
//   return (
//     country["Birthrate"] < 40 //&& country["Infant mortality (per 1000 births)"]
//   );
// }

// fs.createReadStream("countries of the world.csv");
//   .pipe
//     parse({
//       comment: "#",
//       columns: true,
//     })
//   )
//   .on("data", (data) => {
//     if (checkCoutryCriteria(data)) {
//       filteredCountries.push(data);
//     }
//   })
//   .on("error", (err) => {
//     console.log(err);
//   })
//   .on("end", () => {
//     console.log(
//       selectedCountries.map((country) => {
//         return country["Country"];
//       })
//     );
//     console.log(
//       `${
//         selectedCountries.length
//       } countries with criteria "${"Birthrate < 40"}" found!`
// );
//   });

readFile(file_path);

module.exports = { filteredCountries };
