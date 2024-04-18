import {create} from 'zustand'
import axios from "axios";

const spadesStore = create((set) => ({
  conferences: null,
  divisions: null,
  teams: null,
  games: null,

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
  }

}))

export default spadesStore;