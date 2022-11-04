function Cards(props) {
  const cardStyle = {
    width: "max-content",
    margin: "20px",
    textAlign: "center",
    padding: "10px",
    color: "blue",
  };

  return (
    <div className="postcards" style={cardStyle}>
      <img src={props.imageSource} alt={props.altTag} width="280" />
      <h3>Hello from {props.country} !</h3>
    </div>
  );
}

export default Cards;
