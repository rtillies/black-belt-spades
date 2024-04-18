import {create} from 'zustand'
import axios from "axios";

const spadesStore = create((set) => ({
  conferences: [],
  divisions: null,
  teams: null,
  games: null,

  // getNotes: async () => {
  //   // get notes
  //   const res = await axios.get(PATH);
  //   // console.log(res);

  //   // set on state
  //   set({
  //     notes: res.data.notes
  //   })
  //   // setNotes(res.data.notes);
  // },

  getConferences: async () => {
    console.log("Hello");
    const res = await axios.get(`/conferences`)
    console.log("Response", res.data);

    set({
      conferences: res.data,
    })
  }

  // getCards: async() => {
  //   const {deckID, deck} = cardsStore.getState() || 'new'
  //   const count = 54 // cards remaining

  //   if (deckID === null) {
  //     // set({deckID: 'new'})
  //   }

  //   await axios.get(`${deckID}/shuffle/`)
  //   const res = await axios.get(`${deckID}/draw/?count=${count}`)

  //   console.log(deckID);
  //   console.log('data', res.data.cards);
  //   set({
  //     deck: res.data.cards,
  //     showDeck: res.data.cards
  //   })
  // },

  // filter: (term) => {
  //   const {deck, showDeck} = cardsStore.getState()

  //   console.log('filter', term);
  //   console.log('deck filter', deck);

  //   if(term.toLowerCase() === 'all') {
  //     set({
  //       showDeck: deck
  //     })
  //     return
  //   }

  //   const filteredDeck = deck.filter((card) => {
  //     return (card.value.toLowerCase() === term || card.suit.toLowerCase() === term)
  //   })

  //   console.log('new deck', filteredDeck);

  //   set({
  //     showDeck: filteredDeck
  //   })
  // },

}))

export default spadesStore;