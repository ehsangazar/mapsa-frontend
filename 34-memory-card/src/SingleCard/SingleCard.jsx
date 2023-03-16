import { useState } from "react";

const SingleCard = ({ data, handleDelete }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <li onClick={toggleCard}>
      <h2>{data.title}</h2>
      {isFlipped && <p>{data.description}</p>}
      <button onClick={() => handleDelete(data.id)}>Delete</button>
    </li>
  );
};

export default SingleCard;
