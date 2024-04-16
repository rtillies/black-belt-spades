import React from 'react'

export default function Accordion() {
  return (
    <div className="accordion col-md-10 col-lg-8" id="accordionSpades">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            Joker-Joker-Deuce-Deuce
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionSpades">
          <div className="accordion-body">
            <div>
              <img className="rounded playing-card" src="/cards/joker_big.png" alt="Big Joker" />
              <img className="rounded playing-card" src="/cards/joker_little.png" alt="Little Joker" />
              <img className="rounded playing-card" src="/cards/diamond_02_deuce.png" alt="Deuce Diamond" />
              <img className="rounded playing-card" src="/cards/spade_02_deuce.png" alt="Deuce Spade" />
            </div>
            The highest four cards in the deck are <strong>Big Joker</strong>, <strong>Little Joker</strong>,
            <strong>Deuce Diamond</strong>, <strong>Deuce Spade</strong>. These cards rank above the Ace Spade. The
            Deuce Heart and Deuce Club are removed from the deck.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Joker-Joker-Deuce-Ace
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionSpades">
          <div className="accordion-body">
          <div>
              <img className="rounded playing-card" src="/cards/joker_big.png" alt="Big Joker" />
              <img className="rounded playing-card" src="/cards/joker_little.png" alt="Little Joker" />
              <img className="rounded playing-card" src="/cards/spade_02_deuce.png" alt="Deuce Spade" />
              <img className="rounded playing-card" src="/cards/spade_01_ace.png" alt="Ace Spade" />
            </div>

            The highest four cards in the deck are <strong>Big Joker</strong>, <strong>Little Joker</strong>,
            <strong>Deuce Spade</strong>, <strong>Ace Spade</strong>. Two of the remaining deuces are removed from the
            deck (usually the Deuce Heart and Deuce Diamond).
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Joker-Joker-Ace (no deuces wild)
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionSpades">
          <div className="accordion-body">
            <div>
              <img className="rounded playing-card" src="/cards/joker_big.png" alt="Big Joker" />
              <img className="rounded playing-card" src="/cards/joker_little.png" alt="Little Joker" />
              <img className="rounded playing-card" src="/cards/spade_01_ace.png" alt="Ace Spade" />
              <img className="rounded playing-card" src="/cards/spade_13_king.png" alt="King Spade" />
            </div>

            The highest four cards in the deck are <strong>Big Joker</strong>, <strong>Little Joker</strong>,
            <strong>Ace Spade</strong>, <strong>King Spade</strong>. Two deuces are removed from the deck (usually the
            Deuce Heart and Deuce Diamond).
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Ace High (no jokers)
          </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionSpades">
          <div className="accordion-body">
            <div>
              <img className="rounded playing-card" src="/cards/spade_01_ace.png" alt="Ace Spade" />
              <img className="rounded playing-card" src="/cards/spade_13_king.png" alt="King Spade" />
              <img className="rounded playing-card" src="/cards/spade_12_queen.png" alt="Queen Spade" />
              <img className="rounded playing-card" src="/cards/spade_11_jack.png" alt="Jack Spade" />
            </div>

            The highest card in the deck is the Ace Spade. There are no jokers, and the deuces are not <i>wild</i> in
            this variation. No cards are removed from the deck.
          </div>
        </div>
      </div>
    </div>
  )
}
