const express = require("express");
const bodyParser = require("body-parser");
const connection = require("../connectMysql");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/news", (req, res) => {
  const { category_id } = req.query;
  let query =
    "SELECT news.*, tags.name as tags_name FROM news JOIN tags on tags_id = tags.id";

  if (category_id) {
    query += " WHERE category_id = ?";
  }

  connection.query(query, [category_id], (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result);
  });
});

router.get("/news/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM news WHERE id =?";
  connection.query(query, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result[0]);
  });
});

router.get("/news/category/:id", (req, res) => {
  const { id } = req.params;
  const query = `SELECT news.*, tags.name as tags_name FROM news JOIN tags on tags_id = tags.id where category_id = ${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .send({ error: "Internal Server Error", details: err });
    }
    res.status(200).json(result);
  });
});

router.get("/news/tags/:id", (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM news WHERE tags_id = ${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .send({ error: "Internal Server Error", details: err });
    }
    res.status(200).json(result);
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM account WHERE email = ?";
  connection.query(query, [email], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length > 0) {
      const user = result[0];
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return res.status(200).send("Login successful");
        } else {
          return res.status(401).send("Password or email incorrect");
        }
      });
    } else {
      return res.status(401).send("Account not found");
    }
  });
});

router.post("/add_post", (req, res) => {
  const { title, cover, date, author, desc, category_id, tags_id } = req.body;
  const query =
    "INSERT INTO news (title, cover, date, author, `desc`, category_id, tags_id) VALUES (?,?,?,?,?,?,?)";
  connection.query(
    query,
    [title, cover, date, author, desc, category_id, tags_id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      return res.status(201).send("Add post successfully");
    }
  );
});

router.put("/news/:id", (req, res) => {
  const { id } = req.params;
  const { title, cover, date, author, desc, category_id, tags_id } = req.body;
  if (
    !title ||
    !cover ||
    !date ||
    !author ||
    !desc ||
    !category_id ||
    !tags_id
  ) {
    return res.status(400).send("All fields are required");
  }
  const query =
    "UPDATE news SET title = ?, cover = ?, date = ?, author = ?, `desc` = ?, category_id = ?, tags_id = ? WHERE id = ?";
  connection.query(
    query,
    [title, cover, date, author, desc, category_id, tags_id, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send("Post edited successfully");
    }
  );
});

router.delete("/news/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM news WHERE id =?";
  connection.query(query, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send("Post deleted successfully");
  });
});

router.get("/category", (req, res) => {
  const query = "SELECT * FROM category";
  connection.query(query, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result);
  });
});

module.exports = router;
