/* eslint-disable no-console */

const { PORT = 8000 } = require("./common/config");
const app = require("./app");

const startApp = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startApp();
