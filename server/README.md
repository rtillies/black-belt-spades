# SBA 319: MongoDB Database Application

* **Name**: Richard Tillies
* **Date**: April 2, 2024
* **Requirements**: 
[SBA MongoDB Database Application](docs/sba-mongodb-app.pdf)

## Objectives

* Create a server application with Node, Express, and MongoDB.
* Create a CRUD API using Express and MongoDB.
* Create MongoDB indexes.
* Use MongoDB indexing to make efficient queries.
* Create MongoDB validation rules.
* Use MongoDB validation to ensure data consistency.

## Instructions

### Models
* Conference: 
  * Required: `name`
  * Optional: `description`
  * Index: `name`
* Team: 
  * Required: `name`, `conference`, `captain`, `partner`, `location`
  * Computed: `wins`, `loss`
  * Index: `name`
* Game: 
  * Required: `date`, `homeTeam`, `awayTeam`, `homeScore`, `awayScore`
  * Computed: `winner`
  * Index: `date`+`winner`

### Conference
* READ all conferences: `GET /api/conferences`
* CREATE new conference: `POST /api/conferences`
* READ single conference by name: `GET /api/conferences/:name`
* UPDATE conference by name: `PATCH /api/conferences/:name`
* DELETE conference by name: `DELETE /api/conferences/:name`

### Teams
* READ all teams: `GET /api/teams`
* CREATE new team: `POST /api/teams`
* READ single team by name: `GET /api/teams/:name`
* UPDATE team by name: `PATCH /api/teams/:name`
* DELETE team by name: `DELETE /api/teams/:name`

### Games
* READ all games: `GET /api/games`
* CREATE new game: `POST /api/games`
* READ single game by winning team: `GET /api/games/:name`
* No UPDATE or DELETE routes for Game

## Notes

* 