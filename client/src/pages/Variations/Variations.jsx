import Accordion from "../../components/Accordion/VariationAccordion";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./variations.css";

export default function Variations() {
  return (
    <>
      <PageHeader header="Game Variations" buttonList="none" />
      <Accordion />
    </>
  );
}
