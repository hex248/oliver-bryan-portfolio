const fs = require("fs");

fs.writeFileSync("./src/photos/people.json", JSON.stringify(fs.readdirSync("./public/photos/people/full-size").filter((f) => f.endsWith(".jpg"))));
fs.writeFileSync("./src/photos/environment.json", JSON.stringify(fs.readdirSync("./public/photos/environment/full-size").filter((f) => f.endsWith(".jpg"))));
fs.writeFileSync("./src/photos/nature.json", JSON.stringify(fs.readdirSync("./public/photos/nature/full-size").filter((f) => f.endsWith(".jpg"))));
