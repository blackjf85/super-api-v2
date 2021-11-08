const express = require("express");
const axios = require("axios");

const router = express.Router();

require("dotenv").config();

const { BASE_URL, API_KEY } = process.env;

router.get("/", (req, res) => {
  res.status(401).json({ message: "Please enter a search term" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  try {
    axios.get(`${BASE_URL}${API_KEY}/${id}`).then((response) => {
      res.json(response.data);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id/powerstats", (req, res) => {
  const { id } = req.params;

  try {
    axios.get(`${BASE_URL}${API_KEY}/${id}/powerstats`).then((response) => {
      res.json(response.data);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id/biography", (req, res) => {
  const { id } = req.params;

  try {
    axios.get(`${BASE_URL}${API_KEY}/${id}/biography`).then((response) => {
      res.json(response.data);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id/appearance", (req, res) => {
  const { id } = req.params;

  try {
    axios.get(`${BASE_URL}${API_KEY}/${id}/appearance`).then((response) => {
      res.json(response.data);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id/work", (req, res) => {
  const { id } = req.params;

  try {
    axios.get(`${BASE_URL}${API_KEY}/${id}/work`).then((response) => {
      res.json(response.data);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id/connections", (req, res) => {
  const { id } = req.params;

  try {
    axios.get(`${BASE_URL}${API_KEY}/${id}/connections`).then((response) => {
      res.json(response.data);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id/image", (req, res) => {
  const { id } = req.params;

  try {
    axios.get(`${BASE_URL}${API_KEY}/${id}/image`).then((response) => {
      res.json(response.data);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
