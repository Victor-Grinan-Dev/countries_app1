const app = require("./app");
const http = require("http");

const { loadCountriesData } = require("./models/countries.models");

const PORT = process.env.SERVER_PORT || 3001;

const server = http.createServer(app);
app.get("/", (req, res) => {
  console.log("");
});

async function loadData() {
  await loadCountriesData();
}

loadData();
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
