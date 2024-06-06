interface QuestionsAndAnswersArrayProps {
  question: string;
  answer: string;
}

export const generateQuestions = async (
  technology: string,
  language: string
): Promise<QuestionsAndAnswersArrayProps[]> => {
  const response = await fetch("http://localhost:3001/api/questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ technology, language }),
  });

  return response.json();
};
