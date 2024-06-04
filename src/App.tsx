import React, { useState } from "react";
import { generateQuestions } from "./api/openai";
import { HomeCommand } from "./components/common/HomeCommand";
import Navbar from "./components/common/Navbar";

const App: React.FC = () => {
  const [technology, setTechnology] = useState("");
  const [language, setLanguage] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFetchQuestions = async () => {
    setLoading(true);
    const data = await generateQuestions(technology, language);
    setQuestions(data);
    setLoading(false);
  };

  console.log(questions);

  return (
    <>
      <Navbar />
      <div className="relative w-screen h-screen before:absolute before:inset-0 before:bg-radial-bg after:absolute after:inset-0 after:bg-texture after:bg-repeat after:opacity-[0.01]">
        <div className="relative container flex justify-center items-center h-screen z-10">
          <HomeCommand />
        </div>
        {/* <h1>Interview Questions</h1>
      <label htmlFor="language">Idioma (Opcional)</label>
      <input
        type="text"
        name="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        placeholder="Enter language"
      />
      <label htmlFor="tech">Tecnologia</label>
      <input
        type="text"
        name="tech"
        value={technology}
        onChange={(e) => setTechnology(e.target.value)}
        placeholder="Enter technology"
      />
      <Button onClick={handleFetchQuestions} disabled={loading}>
        {loading ? "Loading..." : "Get Questions"}
      </Button>

      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul> */}
      </div>
    </>
  );
};

export default App;
