const criteriasTocheck = [
  ["Birthrate"],
  ["Infant mortality (per 1000 births)"],
];

const filter = (name, comparisson, criteria) => {
  switch (comparisson) {
    case "less":
      return country[name] < criteria;

    case "more":
      return country[name] > criteria;

    case "equal":
      return country[name] === criteria;

    default:
      break;
  }
};

const toEval =
  "Number(country['Birthrate']) > 10 && Number(country['Birthrate']) < 20";

//"Population": "15233244" (Kazakhstan )

function checkCoutryCriteria(country) {
  //   console.log(country["Birthrate"] < 40);
  if (eval(toEval)) return country;
  // return (
  //   country["Birthrate"] < 40 //&& country["Infant mortality (per 1000 births)"]

  //   // country["koi_disposition"] === "CONFIRMED" &&
  //   // country["koi_insol"] > 0.36 &&
  //   // country["koi_insol"] < 1.11 &&
  //   // country["koi_prad"] < 1.6

  // );
}

module.exports = { filter };
