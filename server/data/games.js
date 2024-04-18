const games = [
  {
    // "id": 1,
    // "code": "1v2",
    "date": "2024-02-05",
    "homeTeam": "VA Ballerz",
    "awayTeam": "JQ Suited",
    "homeScore": 545,
    "awayScore": 164,
    "winner": "VA Ballerz"
  },
  {
    // "id": 2,
    // "code": "3v4",
    "date": "2024-02-05",
    "homeTeam": "Star Studded",
    "awayTeam": "That Couple",
    "homeScore": 308,
    "awayScore": 535,
    "winner": "That Couple"
  },
  {
    // "id": 3,
    // "code": "5v6",
    "date": "2024-02-05",
    "homeTeam": "Gerow Animals",
    "awayTeam": "Team Bui",
    "homeScore": 255,
    "awayScore": 531,
    "winner": "Team Bui"
  },
  {
    // "id": 4,
    // "code": "7v8",
    "date": "2024-02-05",
    "homeTeam": "Jerzeys Finest",
    "awayTeam": "Knuck If You Stuck",
    "homeScore": 86,
    "awayScore": 505,
    "winner": "Knuck If You Stuck"
  },
  {
    // "id": 5,
    // "code": "1v3",
    "date": "2024-02-06",
    "homeTeam": "VA Ballerz",
    "awayTeam": "Star Studded",
    "homeScore": 598,
    "awayScore": -38,
    "winner": "VA Ballerz"
  },
  {
    // "id": 6,
    // "code": "2v4",
    "date": "2024-02-06",
    "homeTeam": "JQ Suited",
    "awayTeam": "That Couple",
    "homeScore": 278,
    "awayScore": 529,
    "winner": "That Couple"
  },
  {
    // "id": 7,
    // "code": "5v7",
    "date": "2024-02-06",
    "homeTeam": "Gerow Animals",
    "awayTeam": "Jerzeys Finest",
    "homeScore": 436,
    "awayScore": 527,
    "winner": "Jerzeys Finest"
  },
  {
    // "id": 8,
    // "code": "6v8",
    "date": "2024-02-06",
    "homeTeam": "Team Bui",
    "awayTeam": "Knuck If You Stuck",
    "homeScore": 549,
    "awayScore": 347,
    "winner": "Team Bui"
  },
  {
    // "id": 9,
    // "code": "1v4",
    "date": "2024-02-07",
    "homeTeam": "VA Ballerz",
    "awayTeam": "That Couple",
    "homeScore": 507,
    "awayScore": 404,
    "winner": "VA Ballerz"
  },
  {
    // "id": 10,
    // "code": "2v3",
    "date": "2024-02-07",
    "homeTeam": "JQ Suited",
    "awayTeam": "Star Studded",
    "homeScore": 508,
    "awayScore": 115,
    "winner": "JQ Suited"
  },
  {
    // "id": 11,
    // "code": "5v8",
    "date": "2024-02-07",
    "homeTeam": "Gerow Animals",
    "awayTeam": "Knuck If You Stuck",
    "homeScore": 299,
    "awayScore": 529,
    "winner": "Knuck If You Stuck"
  },
  {
    // "id": 12,
    // "code": "6v7",
    "date": "2024-02-07",
    "homeTeam": "Team Bui",
    "awayTeam": "Jerzeys Finest",
    "homeScore": 286,
    "awayScore": 546,
    "winner": "Jerzeys Finest"
  },
  {
    // "id": 13,
    // "code": "2v1",
    "date": "2024-02-12",
    "homeTeam": "JQ Suited",
    "awayTeam": "VA Ballerz",
    "homeScore": 334,
    "awayScore": 523,
    "winner": "VA Ballerz"
  },
  {
    // "id": 14,
    // "code": "4v3",
    "date": "2024-02-12",
    "homeTeam": "That Couple",
    "awayTeam": "Star Studded",
    "homeScore": 504,
    "awayScore": 167,
    "winner": "That Couple"
  },
  {
    // "id": 15,
    // "code": "6v5",
    "date": "2024-02-12",
    "homeTeam": "Team Bui",
    "awayTeam": "Gerow Animals",
    "homeScore": 535,
    "awayScore": 82,
    "winner": "Team Bui"
  },
  {
    // "id": 16,
    // "code": "8v7",
    "date": "2024-02-12",
    "homeTeam": "Knuck If You Stuck",
    "awayTeam": "Jerzeys Finest",
    "homeScore": 502,
    "awayScore": 399,
    "winner": "Knuck If You Stuck"
  },
  {
    // "id": 17,
    // "code": "3v1",
    "date": "2024-02-13",
    "homeTeam": "Star Studded",
    "awayTeam": "VA Ballerz",
    "homeScore": 436,
    "awayScore": 553,
    "winner": "VA Ballerz"
  },
  {
    // "id": 18,
    // "code": "4v2",
    "date": "2024-02-13",
    "homeTeam": "That Couple",
    "awayTeam": "JQ Suited",
    "homeScore": -151,
    "awayScore": 508,
    "winner": "JQ Suited"
  },
  {
    // "id": 19,
    // "code": "7v5",
    "date": "2024-02-13",
    "homeTeam": "Jerzeys Finest",
    "awayTeam": "Gerow Animals",
    "homeScore": 522,
    "awayScore": 479,
    "winner": "Jerzeys Finest"
  },
  {
    // "id": 20,
    // "code": "8v6",
    "date": "2024-02-13",
    "homeTeam": "Knuck If You Stuck",
    "awayTeam": "Team Bui",
    "homeScore": 202,
    "awayScore": 519,
    "winner": "Team Bui"
  },
  {
    // "id": 21,
    // "code": "3v2",
    "date": "2024-02-14",
    "homeTeam": "Star Studded",
    "awayTeam": "JQ Suited",
    "homeScore": 547,
    "awayScore": 298,
    "winner": "Star Studded"
  },
  {
    // "id": 22,
    // "code": "4v1",
    "date": "2024-02-14",
    "homeTeam": "That Couple",
    "awayTeam": "VA Ballerz",
    "homeScore": 320,
    "awayScore": 504,
    "winner": "VA Ballerz"
  },
  {
    // "id": 23,
    // "code": "7v6",
    "date": "2024-02-14",
    "homeTeam": "Jerzeys Finest",
    "awayTeam": "Team Bui",
    "homeScore": 435,
    "awayScore": 508,
    "winner": "Team Bui"
  },
  {
    // "id": 24,
    // "code": "8v5",
    "date": "2024-02-14",
    "homeTeam": "Knuck If You Stuck",
    "awayTeam": "Gerow Animals",
    "homeScore": 557,
    "awayScore": 304,
    "winner": "Knuck If You Stuck"
  }
]

module.exports = games;