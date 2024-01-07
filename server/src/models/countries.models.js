const parse = require("csv-parse");
const fs = require("fs");

const selectedCountries = [];

function checkCoutryCriteria(country) {
  return (
    country["Birthrate"] < 40 //&& country["Infant mortality (per 1000 births)"]

    // country["koi_disposition"] === "CONFIRMED" &&
    // country["koi_insol"] > 0.36 &&
    // country["koi_insol"] < 1.11 &&
    // country["koi_prad"] < 1.6
  );
}

fs.createReadStream("countries of the world.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (checkCoutryCriteria(data)) {
      selectedCountries.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(
      selectedCountries.map((country) => {
        return country["Country"];
      })
    );
    console.log(
      `${
        selectedCountries.length
      } countries with criteria "${"Birthrate < 40"}" found!`
    );
  });

/**** ORIGINAL CODE ****/
// const parse = require("csv-parse");
// const fs = require("fs");

// const habitablePlanets = [];

// function isHabitablePlanet(planet) {
//   return (
//     planet["koi_disposition"] === "CONFIRMED" &&
//     planet["koi_insol"] > 0.36 &&
//     planet["koi_insol"] < 1.11 &&
//     planet["koi_prad"] < 1.6
//   );
// }

// fs.createReadStream("kepler_data.csv")
//   .pipe(
//     parse({
//       comment: "#",
//       columns: true,
//     })
//   )
//   .on("data", (data) => {
//     if (isHabitablePlanet(data)) {
//       habitablePlanets.push(data);
//     }
//   })
//   .on("error", (err) => {
//     console.log(err);
//   })
//   .on("end", () => {
//     console.log(
//       habitablePlanets.map((planet) => {
//         return planet["kepler_name"]; //Pop. Density (per sq. mi.)
//       })
//     );
//     console.log(`${habitablePlanets.length} habitable planets found!`);
//   });
module.exports = selectedCountries;
