const express = require("express");
const app = express();

app.use(express.json())

let comics = [{
    author: "LBrassart",
    title: "Wild Stories",
    illustrator: "N/A",
    year_start: 1970,
    resume: "Lorem ipsum"
},
{
    author: "Stan Lee",
    title: "Batman",
    illustrator: "N/A",
    year_start: 1939,
    resume: "Lorem bat-ipsum"
}
];

app.get("/comics", (req, res) => {
    res.json(comics);
})

app.get("/comics/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.json(comics[id]);
})

app.post("/comics", (req, res) => {
    comics.push(req.body);
    res.status(201).send("Ok! Created new comics")
})

app.listen(5050, () => {
    console.log("Hey there !")
})