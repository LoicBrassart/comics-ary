import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    author: "",
    title: "",
    illustrator: "",
    year_start: "",
    resume: "",
    picture: "",
  });

  const handleChange = (e) => {
    console.log("got field " + e.target.name + ", value " + e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Author:{" "}
          <input
            name="author"
            type="text"
            onChange={handleChange}
            value={form.author}
          />
        </label>
        <br />
        <label>
          Title:{" "}
          <input
            name="title"
            type="text"
            onChange={handleChange}
            value={form.title}
          />
        </label>
        <br />
        <label>
          Illustrator:{" "}
          <input
            name="illustrator"
            type="text"
            onChange={handleChange}
            value={form.Illustrator}
          />
        </label>
        <br />
        <label>
          Année:{" "}
          <input
            name="year_start"
            type="text"
            onChange={handleChange}
            value={form.year_start}
          />
        </label>
        <br />
        <label>
          Résumé:{" "}
          <textarea name="resume" onChange={handleChange} value={form.resume} />
        </label>
        <br />
        <label>
          Image:{" "}
          <input
            name="picture"
            type="text"
            onChange={handleChange}
            value={form.picture}
          />
        </label>
        <br />
        <input type="Submit" value="Nouveau comic!" />
      </form>
    </>
  );
}

export default App;
