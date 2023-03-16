import { useState } from "react";

const MemoryForm = ({ addAMemoryCard }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (event) => {
    if (title === "" || description === "") {
      return;
    }
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    // console.log(data);

    const data = {
      id: new Date().getTime(),
      title,
      description,
    };
    addAMemoryCard(data);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h1>Memory Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <label htmlFor="description">Description</label>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          id="description"
          value={description}
          name="description"
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MemoryForm;
