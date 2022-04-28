import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./App.css";
import Data from "./Data";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState(Data);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h2 className="container--title">
          {cards.length} Bubble Tea nel nostro menu' estivo:{" "}
        </h2>
        <Card cards={cards} />
      </div>
    </div>
  );
}

export default App;
