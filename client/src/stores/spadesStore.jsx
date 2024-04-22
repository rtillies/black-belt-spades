import {create} from 'zustand'
import axios from "axios";

// sort alphabetically by team name
const sortTeamsByName = (arr) => {
  const sorted = arr.toSorted(
    (a,b) => {
      const aName = a.name.toLowerCase()
      const bName = b.name.toLowerCase()
      return aName < bName ? -1 : 1
    }
  )
  return sorted
}

// sort descending order by record
const sortTeamsByRecord = (arr) => {
  const sorted = arr.toSorted(
    (a,b) => {
      const aRecord = Number(a.percent)
      const bRecord = Number(b.percent)
      return bRecord - aRecord
    }
  )
  return sorted
}

const sortGames = () => {
  const sorted = games.toSorted(
    (a,b) => {
      a.gameID - b.gameID
    }
  )
  return sorted
}

const spadesStore = create((set) => ({
  conferences: null,
  divisions: null,
  teams: null,
  games: null,
  team: null,
  teamGames: null,

  // sortTeamsByName: (arr) => {
  //   const sortedArray = arr.toSorted(
  //     (a,b) => {
  //       a.name - b.name
  //     }
  //   )

  //   set({
  //     teams: sortedArray,
  //   })
  // },

  getTeams: async () => {
    try {
      const res = await axios.get(`/teams`)
      // console.log(`all teams`, res.data);
      
      const newTeams = res.data.map((t) => {
        console.log(t);
        const games = t.wins + t.loss
        const percent = games > 0 ? (t.wins / games).toFixed(3) : 0;
        
        return {...t, percent}
      })
      
      // const sortedTeams = sortTeamsByName(res.data)
      // const sortedTeams = sortTeamsByName(newTeams)
      const sortedTeams = sortTeamsByRecord(newTeams)
      
      console.log(`sorted teams`, sortedTeams);
      // res.data.sort((a,b) => {
      //   const aName = a.name.toLowerCase()
      //   const bName = b.name.toLowerCase()
      //   return aName < bName ? -1 : 1
      // })
      
      // console.log(`sorted teams`, res.data);

      set({
        teams: sortedTeams,
        team: sortedTeams[0],
        // teams: res.data,
        // team: res.data[0],
      })
    } catch (error) {
      console.log(error);
    }
  },

  getGames: async () => {
    try {
      const res = await axios.get(`/games`)
      console.log(`all games`, res.data);

      res.data.sort((a,b) => {
        return a.gameID - b.gameID
      })
      
      // console.log(`sorted games`, res.data);
  
      set({
        games: res.data,
      })
    } catch (error) {
      console.log(error);
    }
  },

  getData: async (table) => {
    // console.log("Hello");
    try {
      const res = await axios.get(`/${table}`)
      console.log(`${table}`, res.data);
  
      set({
        [table]: res.data,
      })

    } catch (error) {
      console.log(error);
    }
  },

  getTeam: () => {
    const teams = teams.getState();
    set({
      team: teams[0]
    })
  },

  handleTeamClick: async (t) => {
    console.log('arg team', t);
    axios.get(`games/${t.name}`)
    .then((res)=> {
      console.log('store games data', res.data);

      res.data.sort((a,b) => {
        return a.gameID - b.gameID
      })

      set({
        team: t,
        teamGames: res.data,
      })
    })
  },

}))

export default spadesStore;