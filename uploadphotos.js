const fs = require("fs");
const fse = require("fs-extra");
const { compress } = require("compress-images/promise");
const simpleGit = require("simple-git");
const { v4 } = require("uuid");

const go = async () => {
    let directories = fs.readdirSync("./uploadqueue");
    for (let dir of directories) {
        if (fs.readdirSync(`./uploadqueue/${dir}`).length > 0) {
            for (let file of fs.readdirSync(`./uploadqueue/${dir}`)) {
                if (fs.readdirSync(`./uploadqueue/${dir}`).includes(file))
                    await fs.rename(`./uploadqueue/${dir}/${file}`, `./uploadqueue/${dir}/${v4()}.jpg`, (err) => (err ? console.error(err) : null));
            }
        }
    }

    const progress = (error, statistic, completed) => {
        if (error) {
            console.log("Error happen while processing file");
            console.log(error);
            return;
        }
        console.log("Sucefully processed file");
        console.log(statistic);
    };

    // apply compression and save to web-size
    for (let dir of directories) {
        if (fs.readdirSync(`./uploadqueue/${dir}`).length > 0) {
            // copy to full-size directory
            fse.copySync(`./uploadqueue/${dir}`, `./public/photos/${dir}/full-size`, (err) => (err ? console.error : null));
            console.log(dir);
            const result = await compress({
                source: `./uploadqueue/${dir}/*.jpg`,
                destination: `./public/photos/${dir}/web-size/`,
                enginesSetup: {
                    jpg: { engine: "mozjpeg", command: ["-quality", "50"] },
                },
            });
            console.log(result);
        }
    }

    // write to json indexes
    updateJSON();
    // git commit changes to web-size and json indexes
    const git = simpleGit();

    for (let dir of directories) {
        git.add([`./public/photos/${dir}/web-size/`, `./src/photos/${dir}.json`]);
    }

    git.commit("Updated Photos via uploadphotos.js");

    // git push

    git.push();

    // clear uploadqueue
    fse.emptyDirSync("./uploadqueue/people");
    fse.emptyDirSync("./uploadqueue/environment");
    fse.emptyDirSync("./uploadqueue/nature");
};

const updateJSON = () => {
    fs.writeFileSync("./src/photos/people.json", JSON.stringify(fs.readdirSync("./public/photos/people/web-size").filter((f) => f.endsWith(".jpg"))));
    fs.writeFileSync("./src/photos/environment.json", JSON.stringify(fs.readdirSync("./public/photos/environment/web-size").filter((f) => f.endsWith(".jpg"))));
    fs.writeFileSync("./src/photos/nature.json", JSON.stringify(fs.readdirSync("./public/photos/nature/web-size").filter((f) => f.endsWith(".jpg"))));
};

go();
// updateJSON();
