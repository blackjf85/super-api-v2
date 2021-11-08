const app = require("./api/server");

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server up and running.`);
});
