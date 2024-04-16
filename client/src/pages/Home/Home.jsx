import Carousel from "../../components/Carousel/Carousel";
import PageHeader from "../../components/PageHeader/PageHeader";
import Splash from "../../components/Splash/Splash";
import "./home.css";

export default function Home() {
  return (
    <>
      {/* <PageHeader header="Black Belt Spades" /> */}
      {/* <Carousel /> */}
      {/* <img src='images/Black-Belt-Spades.svg' width='100%' /> */}
      <div className="Home page">
        <Splash />
      </div>
    </>
  );
}
