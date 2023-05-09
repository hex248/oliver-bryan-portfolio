const fs = require("fs");
const fse = require("fs-extra");
const simpleGit = require("simple-git");
const { v4 } = require("uuid");
const sharp = require("sharp");

const go = async () => {
  let directories = fs.readdirSync("./uploadqueue");
  for (let dir of directories) {
    if (fs.readdirSync(`./uploadqueue/${dir}`).length > 0) {
      if (dir === "events") {
        for (let event of fs.readdirSync(`./uploadqueue/${dir}`)) {
          let uploadDir = `./uploadqueue/${dir}/${event}`;
          for (let file of fs.readdirSync(uploadDir)) {
            if (fs.readdirSync(uploadDir).includes(file))
              await fs.rename(
                `${uploadDir}/${file}`,
                `${uploadDir}/${v4()}.jpg`,
                (err) => (err ? console.error(err) : null)
              );
          }
        }
      } else {
        for (let file of fs.readdirSync(`./uploadqueue/${dir}`)) {
          if (fs.readdirSync(`./uploadqueue/${dir}`).includes(file))
            await fs.rename(
              `./uploadqueue/${dir}/${file}`,
              `./uploadqueue/${dir}/${v4()}.jpg`,
              (err) => (err ? console.error(err) : null)
            );
        }
      }
    }
  }

  // apply compression and save to web-size
  for (let dir of directories) {
    if (fs.readdirSync(`./uploadqueue/${dir}`).length > 0) {
      if (dir === "events") {
        for (let event of fs.readdirSync(`./uploadqueue/${dir}`)) {
          let uploadDir = `./uploadqueue/${dir}/${event}`;
          // copy to full-size directory
          let fullSizeDestination = `./public/photos/${dir}/${event}/full-size`;
          let webSizeDestination = `./public/photos/${dir}/${event}/web-size`;
          console.log(fullSizeDestination);
          console.log(webSizeDestination);
          await fse.copySync(uploadDir, fullSizeDestination, (err) =>
            err ? console.error : null
          );

          for (let file of fs.readdirSync(fullSizeDestination)) {
            let image = await sharp(`${fullSizeDestination}/${file}`);
            let resized = await image.resize({ width: 1500 });
            if (!fs.existsSync(webSizeDestination))
              fs.mkdirSync(webSizeDestination);
            await resized.toFile(`${webSizeDestination}/${file}`);
          }
        }
      } else {
        // copy to full-size directory
        await fse.copySync(
          `./uploadqueue/${dir}`,
          `./public/photos/${dir}/full-size`,
          (err) => (err ? console.error : null)
        );
        console.log(dir);

        for (let file of fs.readdirSync(`./public/photos/${dir}/full-size`)) {
          let image = await sharp(`./public/photos/${dir}/full-size/${file}`);
          let resized = await image.resize({ width: 1500 });
          await resized.toFile(`./public/photos/${dir}/web-size/${file}`);
        }
      }
    }
  }

  // write to json indexes
  updateJSON();
  fse.emptyDirSync("./uploadqueue/events");
  fse.emptyDirSync("./uploadqueue/portraits");
  fse.emptyDirSync("./uploadqueue/street");
};

const updateJSON = () => {
  let events = JSON.parse(fs.readFileSync("./src/photos/events.json"));
  for (let event of fs.readdirSync("./public/photos/events")) {
    let eventIDX = events.findIndex((e) => e.name === event);
    if (eventIDX > -1) {
      // if the event has already been recorded
      events[eventIDX].photos = fs.readdirSync(
        `./public/photos/events/${event}/full-size`
      );
    } else {
      events.push({
        name: event,
        date: "",
        link: "",
        photos: fs.readdirSync(`./public/photos/events/${event}/full-size`),
      });
    }
  }

  const DateMaker = (dateStr) => {
    let arr = dateStr.split("/");

    let ms = Date.parse(`${arr[1]}/${arr[0]}/${arr[2]}`); // convert UK to US format

    return ms;
  };

  events = events.sort((a, b) => {
    if (DateMaker(a.date) >= DateMaker(b.date)) {
      return -1;
    }
    return 1;
  });

  fs.writeFileSync("./src/photos/events.json", JSON.stringify(events, null, 4));
  fs.writeFileSync(
    "./src/photos/portraits.json",
    JSON.stringify(
      fs
        .readdirSync("./public/photos/portraits/web-size")
        .filter((f) => f.endsWith(".jpg"))
    )
  );
  fs.writeFileSync(
    "./src/photos/street.json",
    JSON.stringify(
      fs
        .readdirSync("./public/photos/street/web-size")
        .filter((f) => f.endsWith(".jpg"))
    )
  );
};

go();
