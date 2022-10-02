const fs = require("fs");
const fse = require("fs-extra");
const simpleGit = require("simple-git");
const { v4 } = require("uuid");
const sharp = require("sharp");

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

    // apply compression and save to web-size
    for (let dir of directories) {
        if (fs.readdirSync(`./uploadqueue/${dir}`).length > 0) {
            // copy to full-size directory
            await fse.copySync(`./uploadqueue/${dir}`, `./public/photos/${dir}/full-size`, (err) => (err ? console.error : null));
            console.log(dir);

            for (let file of fs.readdirSync(`./public/photos/${dir}/full-size`)) {
                let image = await sharp(`./public/photos/${dir}/full-size/${file}`);
                let resized = await image.resize({ width: 1500 });
                await resized.toFile(`./public/photos/${dir}/web-size/${file}`);
            }
        }
    }

    // write to json indexes
    updateJSON();
    // git commit changes to web-size and json indexes
    // const git = simpleGit();

    // for (let dir of directories) {
    //     git.add([`./public/photos/${dir}/web-size/`, `./src/photos/${dir}.json`]);
    // }

    // git.commit("Updated Photos via uploadphotos.js");

    // // git push

    // git.push();

    // clear uploadqueue
    fse.emptyDirSync("./uploadqueue/portraits");
    fse.emptyDirSync("./uploadqueue/environment");
    fse.emptyDirSync("./uploadqueue/nature");
};

const updateJSON = () => {
    fs.writeFileSync("./src/photos/portraits.json", JSON.stringify(fs.readdirSync("./public/photos/portraits/web-size").filter((f) => f.endsWith(".jpg"))));
    fs.writeFileSync("./src/photos/environment.json", JSON.stringify(fs.readdirSync("./public/photos/environment/web-size").filter((f) => f.endsWith(".jpg"))));
    fs.writeFileSync("./src/photos/nature.json", JSON.stringify(fs.readdirSync("./public/photos/nature/web-size").filter((f) => f.endsWith(".jpg"))));
};

go();
