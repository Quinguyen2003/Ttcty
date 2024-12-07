import React from "react";
import "./style.css";
import RecentPost from "../recentpost/recentpost";
import RideAndDrive from "../rideanddrive/rideanddrive";
// import Life from '../life/life'
import MusicNews from "../musicnews/musicnews";
import Side from "../../sidecontent/side/Side";
import TechNews from "../technews/technews";

const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <RecentPost />
            <RideAndDrive />
            <TechNews />
            <MusicNews />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};
<main>
  <div className="container">
    <section className="mainContent"></section>
  </div>
</main>;
export default Home;
