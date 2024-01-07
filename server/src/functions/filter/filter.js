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

module.exports = { filter };
