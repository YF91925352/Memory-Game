import "./SingleCard.css";
const SingleCard = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div key={card.id} className="card">
      <div>
        <img alt="card front" src={card.src} className="front" />{" "}
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
