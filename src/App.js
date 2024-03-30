import { useState, useEffect } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";
const cardImages = [
  { src: "/img/1.jpeg", matched: false },
  { src: "/img/2.jpeg", matched: false },
  { src: "/img/3.jpeg", matched: false },
  { src: "/img/4.jpeg", matched: false },
  { src: "/img/5.jpeg", matched: false },
  { src: "/img/6.jpeg", matched: false },
  { src: "/img/7.jpeg", matched: false },
  { src: "/img/8.jpeg", matched: false },
  { src: "/img/9.jpeg", matched: false },
  { src: "/img/10.jpeg", matched: false },
  { src: "/img/11.jpeg", matched: false },
  { src: "/img/12.jpeg", matched: false },
  { src: "/img/13.jpeg", matched: false },
  { src: "/img/14.jpeg", matched: false },
  { src: "/img/15.jpeg", matched: false },
  { src: "/img/16.jpeg", matched: false },
  { src: "/img/17.jpeg", matched: false },
  { src: "/img/18.jpeg", matched: false },
  { src: "/img/19.jpeg", matched: false },
  { src: "/img/20.jpeg", matched: false },
  { src: "/img/21.jpeg", matched: false },
  { src: "/img/22.jpeg", matched: false },
  { src: "/img/23.jpeg", matched: false },
  { src: "/img/24.jpeg", matched: false },
  { src: "/img/25.jpeg", matched: false },
  { src: "/img/26.jpeg", matched: false },
  { src: "/img/27.jpeg", matched: false },
  { src: "/img/28.jpeg", matched: false },
  { src: "/img/29.jpeg", matched: false },
  { src: "/img/30.jpeg", matched: false },
  { src: "/img/31.jpeg", matched: false },
  { src: "/img/32.jpeg", matched: false },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceone, setChoiceone] = useState(null);
  const [choicetwo, setChoicetwo] = useState(null);
  //shuffle card
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };
  //handle a choice
  const handleChoice = (card) => {
    choiceone ? setChoicetwo(card) : setChoiceone(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choicetwo && choiceone) {
      if (choiceone.src === choicetwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceone.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurns();
      } else {
        resetTurns();
      }
    }
  }, [choiceone, choicetwo]);
  console.log(cards);
  //reset & increase turns
  const resetTurns = () => {
    setChoiceone(null);
    setChoicetwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };
  return (
    <div className="App">
      <h1>Spongebob Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choiceone || card === choicetwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
