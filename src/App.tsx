import Bg from "@/assets/gradient.png";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { FaSearch } from "react-icons/fa";

import { Skeleton } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { generateQuestions } from "./api/openai";
import Navbar from "./components/common/Navbar";
import QuestionsCard from "./components/common/QuestionsCard";
import { LANGUAGES } from "./utils/constants";

interface QuestionsAndAnswersArrayProps {
  question: string;
  answer: string;
}

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [technology, setTechnology] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const language = localStorage.getItem("i18nextLng") || "en";
  const [questions, setQuestions] = useState<QuestionsAndAnswersArrayProps[]>(
    []
  );

  const [loading, setLoading] = useState(false);

  const fetchQuestions = async (tech: string) => {
    setLoading(true);
    console.log(LANGUAGES[language as keyof typeof LANGUAGES]);
    try {
      const data = await generateQuestions(
        tech,
        LANGUAGES[language as keyof typeof LANGUAGES]
      );
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTechnology("");
    setQuestions([]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [i18n.language]);

  return (
    <main className="w-screen h-screen bg-radial-bg">
      <img src={Bg} className="fixed opacity-30 top-0" />
      <header>
        <Navbar />
        <div className="container h-[250px] w-full flex items-center">
          <h1 className="flex items-center gap-2 text-slate-300 text-6xl after:bg-slate-300 after:content-[''] after:w-[25px] after:h-[55px] after:inline-block after:animate-cursor-blink">
            <span className="font-bold">Quick</span> interview questions.
          </h1>
        </div>
      </header>
      <div className="flex container">
        <div className="flex w-[30%] gap-4">
          <Input
            isClearable
            variant="bordered"
            size="sm"
            ref={inputRef}
            type="text"
            label={t("homeInput.placeholder")}
            onChange={(e) => setTechnology(e.target.value)}
          />
          <Button
            radius="sm"
            size="sm"
            variant="bordered"
            className="h-[48px] w-[48px] p-0"
            onClick={() => fetchQuestions(technology)}
          >
            <FaSearch className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <QuestionsCard technology={technology} questionsResponse={questions} />

      {loading && (
        <Skeleton className="rounded-lg duration-[2000ms]">
          <div className="h-24 rounded-lg bg-default-300 "></div>
        </Skeleton>
      )}
      {/* 
        {questions && !loading && (
          <div className="w-screen absolute top-[60%] text-slate-300 flex justify-center">
            <QuestionsAndAnswers questionsResponse={questions} />
          </div>
        )} */}
    </main>
  );
};

export default App;
