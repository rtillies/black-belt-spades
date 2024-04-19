import {create} from 'zustand'
import axios from "axios";

const spadesStore = create((set) => ({
  conferences: null,
  divisions: null,
  teams: null,
  games: null,
  team: null,
  teamGames: null,

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

      set({
        team: t,
        teamGames: res.data,
      })
    })
  },

}))

export default spadesStore;