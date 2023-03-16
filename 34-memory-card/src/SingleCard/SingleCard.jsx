import { useState } from "react";

const SingleCard = ({ data, handleDelete }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <li onClick={toggleCard}>
      <h2>{data.title}</h2>

      {/* MOUNT / UNMOUNT */}
      {/* {isFlipped && <p className="card-version1">{data.description}</p>} */}

      {/* CSS EDIT */}
      {/* INLINE */}
      {/* CSS IN JS */}
      <p
        className="card-version2"
        style={{
          opacity: isFlipped ? 1 : 0,
          height: isFlipped ? "100px" : 0,
          transitionDuration: "1s",
        }}
      >
        {data.description}
      </p>
      <button onClick={() => handleDelete(data.id)}>Delete</button>
    </li>
  );
};

export default SingleCard;
