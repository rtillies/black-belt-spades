const games = [
  {
    "gameID": 1,
    "date": "2024-02-05",
    "homeTeam": "VA Ballerz",
    "awayTeam": "JQ Suited",
    "homeScore": 545,
    "awayScore": 164,
    // "winner": "VA Ballerz"
  },
  {
    "gameID": 2,
    "date": "2024-02-05",
    "homeTeam": "Star Studded",
    "awayTeam": "That Couple",
    "homeScore": 308,
    "awayScore": 535,
    // "winner": "That Couple"
  },
  {
    "gameID": 3,
    "date": "2024-02-05",
    "homeTeam": "Gerow Animals",
    "awayTeam": "Team Bui",
    "homeScore": 255,
    "awayScore": 531,
    // "winner": "Team Bui"
  },
  {
    "gameID": 4,
    "date": "2024-02-05",
    "homeTeam": "Jerzeys Finest",
    "awayTeam": "Knuck If You Stuck",
    "homeScore": 86,
    "awayScore": 505,
    // "winner": "Knuck If You Stuck"
  },
  {
    "gameID": 5,
    "date": "2024-02-06",
    "homeTeam": "VA Ballerz",
    "awayTeam": "Star Studded",
    "homeScore": 598,
    "awayScore": -38,
    // "winner": "VA Ballerz"
  },
  {
    "gameID": 6,
    "date": "2024-02-06",
    "homeTeam": "JQ Suited",
    "awayTeam": "That Couple",
    "homeScore": 278,
    "awayScore": 529,
    // "winner": "That Couple"
  },
  {
    "gameID": 7,
    "date": "2024-02-06",
    "homeTeam": "Gerow Animals",
    "awayTeam": "Jerzeys Finest",
    "homeScore": 436,
    "awayScore": 527,
    // "winner": "Jerzeys Finest"
  },
  {
    "gameID": 8,
    "date": "2024-02-06",
    "homeTeam": "Team Bui",
    "awayTeam": "Knuck If You Stuck",
    "homeScore": 549,
    "awayScore": 347,
    // "winner": "Team Bui"
  },
  {
    "gameID": 9,
    "date": "2024-02-07",
    "homeTeam": "VA Ballerz",
    "awayTeam": "That Couple",
    "homeScore": 507,
    "awayScore": 404,
    // "winner": "VA Ballerz"
  },
  {
    "gameID": 10,
    "date": "2024-02-07",
    "homeTeam": "JQ Suited",
    "awayTeam": "Star Studded",
    "homeScore": 508,
    "awayScore": 115,
    // "winner": "JQ Suited"
  },
  {
    "gameID": 11,
    "date": "2024-02-07",
    "homeTeam": "Gerow Animals",
    "awayTeam": "Knuck If You Stuck",
    "homeScore": 299,
    "awayScore": 529,
    // "winner": "Knuck If You Stuck"
  },
  {
    "gameID": 12,
    "date": "2024-02-07",
    "homeTeam": "Team Bui",
    "awayTeam": "Jerzeys Finest",
    "homeScore": 286,
    "awayScore": 546,
    // "winner": "Jerzeys Finest"
  },
  {
    "gameID": 13,
    "date": "2024-02-12",
    "homeTeam": "JQ Suited",
    "awayTeam": "VA Ballerz",
    "homeScore": 334,
    "awayScore": 523,
    // "winner": "VA Ballerz"
  },
  {
    "gameID": 14,
    "date": "2024-02-12",
    "homeTeam": "That Couple",
    "awayTeam": "Star Studded",
    "homeScore": 504,
    "awayScore": 167,
    // "winner": "That Couple"
  },
  {
    "gameID": 15,
    "date": "2024-02-12",
    "homeTeam": "Team Bui",
    "awayTeam": "Gerow Animals",
    "homeScore": 535,
    "awayScore": 82,
    // "winner": "Team Bui"
  },
  {
    "gameID": 16,
    "date": "2024-02-12",
    "homeTeam": "Knuck If You Stuck",
    "awayTeam": "Jerzeys Finest",
    "homeScore": 502,
    "awayScore": 399,
    // "winner": "Knuck If You Stuck"
  },
  {
    "gameID": 17,
    "date": "2024-02-13",
    "homeTeam": "Star Studded",
    "awayTeam": "VA Ballerz",
    "homeScore": 436,
    "awayScore": 553,
    // "winner": "VA Ballerz"
  },
  {
    "gameID": 18,
    "date": "2024-02-13",
    "homeTeam": "That Couple",
    "awayTeam": "JQ Suited",
    "homeScore": -151,
    "awayScore": 508,
    // "winner": "JQ Suited"
  },
  {
    "gameID": 19,
    "date": "2024-02-13",
    "homeTeam": "Jerzeys Finest",
    "awayTeam": "Gerow Animals",
    "homeScore": 522,
    "awayScore": 479,
    // "winner": "Jerzeys Finest"
  },
  {
    "gameID": 20,
    "date": "2024-02-13",
    "homeTeam": "Knuck If You Stuck",
    "awayTeam": "Team Bui",
    "homeScore": 202,
    "awayScore": 519,
    // "winner": "Team Bui"
  },
  {
    "gameID": 21,
    "date": "2024-02-14",
    "homeTeam": "Star Studded",
    "awayTeam": "JQ Suited",
    "homeScore": 547,
    "awayScore": 298,
    // "winner": "Star Studded"
  },
  {
    "gameID": 22,
    "date": "2024-02-14",
    "homeTeam": "That Couple",
    "awayTeam": "VA Ballerz",
    "homeScore": 320,
    "awayScore": 504,
    // "winner": "VA Ballerz"
  },
  {
    "gameID": 23,
    "date": "2024-02-14",
    "homeTeam": "Jerzeys Finest",
    "awayTeam": "Team Bui",
    "homeScore": 435,
    "awayScore": 508,
    // "winner": "Team Bui"
  },
  {
    "gameID": 24,
    "date": "2024-02-14",
    "homeTeam": "Knuck If You Stuck",
    "awayTeam": "Gerow Animals",
    "homeScore": 557,
    "awayScore": 304,
    // "winner": "Knuck If You Stuck"
  }
]

module.exports = games;