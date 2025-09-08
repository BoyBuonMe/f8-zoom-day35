import React from "react";
import { NAVBAR_HEIGHT } from "../../components/Navigation";
import Navigation from "../../components/Navigation";

function Home() {
  return (
    <>
      <div style={{ padding: 20, paddingTop: NAVBAR_HEIGHT + 16 }}>
        <h1>Chào mừng đến với F8 React Day 35</h1>
      </div>
    </>
  );
}

export default Home;
