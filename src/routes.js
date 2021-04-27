const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => res.render("index"))
routes.get('/about', (req, res) => res.render("about"))
routes.get('/map', (req, res) => res.render("map"))
routes.get('/map/create', (req, res) => res.render("create-register"))
routes.get('/help', (req, res) => res.render("help"))
routes.get('/login', (req, res) => res.render("login"))

module.exports = routes;