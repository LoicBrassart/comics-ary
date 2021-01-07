const express = require("express");
const app = express();
const { db } = require("./conf");
app.use(express.json());

app.get("/comics", (req, res) => {
  db.query(
    `SELECT id, title, illustrator, author, year_start, resume, picture from comic`,
    (errSql, resSql) => {
      if (errSql) {
        return res.status(500).send("Nope, sorry, I iz broken !");
      }
      return res.json(resSql);
    }
  );
});

app.get("/comics/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    `SELECT id, title, illustrator, author, year_start, resume, picture from comic WHERE id=?`,
    [id],
    (errSql, resSql) => {
      if (errSql) {
        return res.status(500).send("Nope, sorry, I iz broken !");
      }
      if (!resSql.length) {
        return res.status(500).send("Must be tired, found nothing :(");
      }

      return res.json(resSql);
    }
  );
});

app.post("/comics", (req, res) => {
  db.query(`INSERT INTO comic SET ?`, req.body, (errSql, resSql) => {
    if (errSql) {
      return res.status(500).send("Nope, sorry, I iz broken !");
    }
    res.status(201).send("Ok! Created new comics");
  });
});

app.listen(5050, () => {
  console.log("Hey there !");
});
