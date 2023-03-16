import { useEffect, useState } from "react";
import "./App.css";
import MemoryForm from "./MemoryForm/MemoryForm";
import MemoryList from "./MemoryList/MemoryList";

function App() {
  const [memoryCards, setMemoryCards] = useState([]);

  const addAMemoryCard = (data) => {
    setMemoryCards([...memoryCards, data]);
  };

  const handleDelete = (id) => {
    const newMemoryCards = memoryCards.filter(
      (memoryCard) => memoryCard.id !== id
    );
    setMemoryCards(newMemoryCards);
  };

  // LOAD MEMORYCARDS FROM LOCALSTORAGE ON FIRST RENDER
  useEffect(() => {
    const memoryCards = JSON.parse(localStorage.getItem("memoryCards"));
    if (memoryCards && memoryCards.length > 0) {
      setMemoryCards(memoryCards);
    }
  }, []);

  // WATCH MEMORYCARDS CHANGES
  useEffect(() => {
    localStorage.setItem("memoryCards", JSON.stringify(memoryCards));
  }, [memoryCards]);

  return (
    <div className="App">
      <div>
        <MemoryForm addAMemoryCard={addAMemoryCard} />
        <MemoryList memoryCards={memoryCards} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
