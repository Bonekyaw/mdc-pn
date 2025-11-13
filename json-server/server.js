// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Add delay middleware
server.use((req, res, next) => {
  const delay = 2000; // 2 seconds
  setTimeout(() => next(), delay);
});

server.use(middlewares);
server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running at port:4000");
});
