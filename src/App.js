import { useState } from "react";
import "./App.css";
const cardImages = [
  { src: "/img/1.jpeg" },
  { src: "/img/2.jpeg" },
  { src: "/img/3.jpeg" },
  { src: "/img/4.jpeg" },
  { src: "/img/5.jpeg" },
  { src: "/img/6.jpeg" },
  { src: "/img/7.jpeg" },
  { src: "/img/8.jpeg" },
  { src: "/img/9.jpeg" },
  { src: "/img/10.jpeg" },
  { src: "/img/11.jpeg" },
  { src: "/img/12.jpeg" },
  { src: "/img/13.jpeg" },
  { src: "/img/14.jpeg" },
  { src: "/img/15.jpeg" },
  { src: "/img/16.jpeg" },
  { src: "/img/17.jpeg" },
  { src: "/img/18.jpeg" },
  { src: "/img/19.jpeg" },
  { src: "/img/20.jpeg" },
  { src: "/img/21.jpeg" },
  { src: "/img/22.jpeg" },
  { src: "/img/23.jpeg" },
  { src: "/img/24.jpeg" },
  { src: "/img/25.jpeg" },
  { src: "/img/26.jpeg" },
  { src: "/img/27.jpeg" },
  { src: "/img/28.jpeg" },
  { src: "/img/29.jpeg" },
  { src: "/img/30.jpeg" },
  { src: "/img/31.jpeg" },
  { src: "/img/32.jpeg" },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  //shuffle card
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="App">
      <h1>Spongebob Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div>
              <img alt="card front" src={card.src} className="front" />{" "}
              <img alt="card cover" src="/img/cover.jpeg" className="cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
