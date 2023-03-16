import SingleCard from "../SingleCard/SingleCard";

const MemoryList = ({ memoryCards, handleDelete }) => {
  return (
    <div>
      <h1>Memory List</h1>
      {/* map, foreach or any other loop needs a key */}
      {memoryCards.length === 0 && <p>No memory cards yet</p>}
      <ul>
        {memoryCards.map((memoryCard) => (
          <SingleCard
            key={memoryCard.id}
            data={memoryCard}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default MemoryList;
