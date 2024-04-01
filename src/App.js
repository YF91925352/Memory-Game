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
];
/*  { src: "/img/1.jpeg", matched: false },
  { src: "/img/2.jpeg", matched: false },
  { src: "/img/3.jpeg", matched: false },
  { src: "/img/4.jpeg", matched: false },  { src: "/img/5.jpeg", matched: false },
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
  { src: "/img/32.jpeg", matched: false }, */
function App() {
  const [win, setWin] = useState(false);
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [choiceone, setChoiceone] = useState(null);
  const [choicetwo, setChoicetwo] = useState(null);
  //timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;
        const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
        return { minutes: newMinutes, seconds: newSeconds % 60 };
      });
    }, 1000);
    win && clearInterval(interval);
    return () => clearInterval(interval);
  }, [win]);

  //shuffle card
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setChoiceone(null);
    setChoicetwo(null);
    setTurns(0);
    setTime({ minutes: 0, seconds: 0 });
    setWin(false);
  };
  //start a game auto
  useEffect(() => {
    shuffleCards();
  }, []);
  //handle a choice
  const handleChoice = (card) => {
    choiceone ? setChoicetwo(card) : setChoiceone(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choicetwo && choiceone) {
      setDisabled(true);
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
        setTimeout(() => resetTurns(), 1500);
      }
    }
  }, [choiceone, choicetwo]);
  //handle win
  useEffect(() => {
    setWin(cards.every((card) => card.matched === true));
  }, [cards]);

  //reset & increase turns
  const resetTurns = () => {
    setChoiceone(null);
    setChoicetwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="App">
      <div className="title">
        {win ? (
          <img alt="cheers" src="/img/Congratulations.png" />
        ) : (
          <img alt="title" src="/img/Spongebob Crazy Match.png" />
        )}
      </div>

      <div>
        <button onClick={shuffleCards}>
          <img alt="title" src="/img/newgame.png" />
        </button>
      </div>
      <div className="score">
        <p>Turns : {turns}</p>
        <p>
          Timer: {time.minutes.toString().padStart(2, "0")}:
          {time.seconds.toString().padStart(2, "0")}
        </p>
      </div>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            disabled={disabled}
            flipped={card === choiceone || card === choicetwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
