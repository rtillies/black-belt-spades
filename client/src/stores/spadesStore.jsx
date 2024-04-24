import { create } from "zustand";
import axios from "axios";

// sort alphabetically by team name
const sortTeamsByName = (arr) => {
  const sorted = arr.toSorted((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    return aName < bName ? -1 : 1;
  });
  return sorted;
};

// sort descending order by record
const sortTeamsByRecord = (arr) => {
  const sorted = arr.toSorted((a, b) => {
    const aRecord = Number(a.percent);
    const bRecord = Number(b.percent);
    return bRecord - aRecord;
  });
  return sorted;
};

const sortGames = (arr) => {
  const sorted = arr.toSorted((a, b) => {
    return a.gameID - b.gameID;
  });
  return sorted;
};

const spadesStore = create((set) => ({
  conferences: null,
  divisions: null,
  teams: null,
  games: null,
  team: null,
  teamGames: null,

  colors: ['primary', 'success', 'danger',],

/* ------------------- *
 *    ADD TEAM FORM    *
 * ------------------- */
  addTeamForm: {
    name: "",
    location: "",
    division: "",
    conference: "",
    captain: "",
    partner: "",
    email: "",
    phone: "",
  },

  updateAddTeamFormField: (e) => {
    const { name, value } = e.target;
    console.log(e.target, e.target.value);

    set((state) => {
      return {
        addTeamForm: {
          ...state.addTeamForm,
          [name]: value,
        },
      };
    });
  },

  resetAddTeamForm: (e) => {
    console.log('Reset form');

    set({
      addTeamForm: {
        name: "",
        location: "",
        division: "",
        conference: "",
        captain: "",
        partner: "",
        email: "",
        phone: "",
      },
    });
  },

  addTeam: async (e) => {
    // e.preventDefault();

    const { addTeamForm, teams } = spadesStore.getState();

    // create team
    console.log(addTeamForm);
    const res = await axios.post("/teams", addTeamForm);
    console.log('response', res);

    // update state
    // clear form
    set({
      // teams: [...teams, res.data.team],
      addTeamForm: {
        name: "",
        location: "",
        division: "",
        conference: "",
        captain: "",
        partner: "",
        email: "",
        phone: "",
      },
    });
  },

/* ------------------- *
 *    ADD GAME FORM    *
 * ------------------- */
  addGameForm: {
    gameID: "",
    date: "",
    homeTeam: "",
    awayTeam: "",
    homeScore: 0,
    awayScore: 0,
  },

  updateAddGameFormField: (e) => {
    const { name, value } = e.target;
    console.log(e.target, e.target.value);

    set((state) => {
      return {
        addGameForm: {
          ...state.addGameForm,
          [name]: value,
        },
      };
    });
  },

  resetAddGameForm: (e) => {
    console.log('Reset form');

    set({
      addGameForm: {
        gameID: "",
        date: "",
        homeTeam: "",
        awayTeam: "",
        homeScore: 0,
        awayScore: 0,
      },
    });
  },

  addGame: async (e) => {
    const { addGameForm, games } = spadesStore.getState();

    // create game
    console.log(addGameForm);
    const res = await axios.post("/games", addGameForm);
    console.log('response', res);

    // update state
    // clear form
    set({
      // teams: [...games, res.data.game],
      addGameForm: {
        gameID: "",
        date: "",
        homeTeam: "",
        awayTeam: "",
        homeScore: 0,
        awayScore: 0,
      },
    });
  },

/* ------------------- *
 *  UPDATE TEAM FORM   *
 * ------------------- */

  updateTeamForm: {
    _id: null,
    name: "",
    location: "",
    division: "",
    conference: "",
    captain: "",
    partner: "",
    email: "",
    phone: "",
  },

  teamToUpdate: () => {
    // get current note values
    const { team } = spadesStore.getState();
    console.log('set update team', team);
    console.log('update team?', team);
    // set state

    set({
      updateTeamForm: team,
      // updateTeamForm: {
      //   _id: team._id,
      //   name: team.name,
      //   location: team.location,
      //   division: team.division,
      //   conference: team.conference,
      //   captain: team.captain,
      //   partner: team.partner,
      //   email: team.email,
      //   phone: team.phone,
      // },
    })
    // setUpdateForm({ title: note.title, body: note.body, _id: note._id });
  },


  updateUpdateTeamFormField: (e) => {
    const { name, value } = e.target;
    console.log(e.target, e.target.value);

    set((state) => {
      return {
        updateTeamForm: {
          ...state.updateTeamForm,
          [name]: value,
        },
      };
    });
  },

  resetUpdateTeamForm: (e) => {
    const { updateTeamForm, team } = spadesStore.getState();
    console.log('Reset form');
    console.log('update team', team);

    set({
      updateTeamForm: {
        name: team.name,
        location: team.location,
        division: team.division,
        conference: team.conference,
        captain: team.captain,
        partner: team.partner,
        email: team.email,
        phone: team.phone,
      },
    });
  },

  updateTeam: async (e) => {
    // e.preventDefault();

    const { updateTeamForm, teams, team } = spadesStore.getState();

    // send update request
    console.log(updateTeamForm);
    // const res = await axios.patch("/teams", {
    const res = await axios.patch(`/teams/${team.name}`, {
      name: updateTeamForm.name,
      location: updateTeamForm.location,
      division: updateTeamForm.division,
      conference: updateTeamForm.conference,
      captain: updateTeamForm.captain,
      partner: updateTeamForm.partner,
      email: updateTeamForm.email,
      phone: updateTeamForm.phone,
    });
    console.log('response', res);

    // update teams
    const newTeams = [...teams]
    const teamIndex = teams.findIndex(team => {
      return team._id === updateTeamForm._id
    })
    newTeams[teamIndex] = res.data.team

    // update state and clear form
    set({
      // teams: newTeams,
      updateTeamForm: {
        // name: "",
        // location: "",
        // division: "",
        // conference: "",
        // captain: "",
        // partner: "",
        // email: "",
        // phone: "",
        name: team.name,
        location: team.location,
        division: team.division,
        conference: team.conference,
        captain: team.captain,
        partner: team.partner,
        email: team.email,
        phone: team.phone,
        },
    });
  },

  deleteTeam: async () => {
    const { updateTeamForm, teams, team } = spadesStore.getState();

    // delete team
    // const url_id = `${PATH}/${_id}`
    // const {teams} = spades.getState();
    const res = await axios.delete(`/teams/${team.name}`)

    // const res = await axios.delete(url_id);

    // console.log(res);

    // update state
    const newTeams = teams.filter((t) => {
      return t.name !== team.name;
    });
    // const newTeams = teams.filter((team) => {
    //   return team._id !== _id;
    // });

    // setNotes(newNotes);
    set({
      teams: newTeams,
    })
  },

  pages: {
    teams:  ["Add Team"],
    games:  ["Add Game"],
    single: ["All Teams", "Update Team", "Delete Team"],
    add:    ["Return"],
    none:   [],
  },

  getTeams: async () => {
    try {
      const res = await axios.get(`/teams`);

      const newTeams = res.data.map((t) => {
        // console.log(t);
        const games = t.wins + t.loss;
        const percent = games > 0 ? (t.wins / games).toFixed(3) : (0/1).toFixed(3);

        return { ...t, percent };
      });

      const sortedTeams = sortTeamsByRecord(newTeams);
      console.log(`sorted teams`, sortedTeams);

      set({
        teams: sortedTeams,
        team: sortedTeams[0],
        // teams: res.data,
        // team: res.data[0],
      });
    } catch (error) {
      console.log(error);
    }
  },

  getGames: async () => {
    try {
      const res = await axios.get(`/games`);

      const sortedGames = sortGames(res.data);
      console.log(`sorted games`, sortedGames);

      set({
        games: sortedGames,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getData: async (table) => {
    // console.log("Hello");
    try {
      const res = await axios.get(`/${table}`);
      console.log(`${table}`, res.data);

      set({
        [table]: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getTeam: () => {
    const teams = teams.getState();
    set({
      team: teams[0],
    });
  },

  handleTeamClick: async (t) => {
    console.log("arg team", t);
    axios.get(`games/${t.name}`).then((res) => {
      console.log("store games data", res.data);

      res.data.sort((a, b) => {
        return a.gameID - b.gameID;
      });

      set({
        team: t,
        teamGames: res.data,
      });
    });
  },


}));

export default spadesStore;
