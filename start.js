const { exec } = require("child_process");
const path = require("path");

const bdPathFile = path.join(
  "C:/Users/alexa/Desktop/Challenge II - API e etc/db.json"
);
const pathIndex = path.join(
  "C:/Users/alexa/Desktop/Challenge II - API e etc/index.html"
);
const command = `json-server --watch ${bdPathFile}`;
const jsonServerProcess = exec(command);

jsonServerProcess.on("exit", () => {
  exec(`cmd /c start "${pathIndex}"`);
});
