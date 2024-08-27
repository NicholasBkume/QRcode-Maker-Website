import express from "express";
import bodyParser from "body-parser";
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/create", (req, res) => {
  let name = req.body.fname;
  let url = req.body.url;
  let imgLocation = req.body.fname + ".png";
  let qr_svg = qr.image(req.body.url);

  qr_svg.pipe(fs.createWriteStream("public/" + imgLocation, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }));
   
  res.render("index.ejs", {
    url: url,
    name: name,
    img: imgLocation
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
