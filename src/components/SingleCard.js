import "./SingleCard.css";
const SingleCard = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  console.log(flipped);
  return (
    <div key={card.id} className="card">
      <div className={flipped ? "flipped" : ""}>
        <img alt="card front" src={card.src} className="front" />
        <img
          alt="card cover"
          src="/img/cover.jpeg"
          className="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
