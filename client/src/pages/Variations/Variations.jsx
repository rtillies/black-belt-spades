import React from "react";
import "./variations.css";
import Accordion from "../../components/Accordion/Accordion";
// const cards = require.context('../assets/cards', true)

export default function Variations() {
  return (
    <>
      <div className="page-header p-4">
        <h1>Variations</h1>
      </div>

      <Accordion />
    </>
  );
}
