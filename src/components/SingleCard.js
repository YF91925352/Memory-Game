import "./SingleCard.css";
const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    !disabled && handleChoice(card);
  };

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
