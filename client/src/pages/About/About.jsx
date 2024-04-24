import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./about.css";
import { Link } from "react-router-dom";
import AboutAccordion from "../../components/Accordion/AboutAccordion";

export default function About() {
  return (
    <>
      <PageHeader header={"About Black Belt Spades"} buttonList={"none"} />
      <AboutAccordion />
    </>
  );
}