const app = require("./app");
const http = require("http");

const PORT = process.env.SERVER_PORT || 3001;

const server = http.createServer(app);
app.get("/", (req, res) => {
  res.send("HELLO");
});

server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
