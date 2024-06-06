import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QuestionsAndAnswersArrayProps {
  question: string;
  answer: string;
}

interface QuestionsAndAnswersProps {
  questionsResponse: Array<QuestionsAndAnswersArrayProps>;
}

export default function QuestionsAndAnswers({
  questionsResponse,
}: QuestionsAndAnswersProps) {
  return (
    <Accordion className="z-[11] w-[80%]" type="single" collapsible>
      {questionsResponse.map((item, index) => (
        <AccordionItem value={`item-${index + 1}`}>
          <AccordionTrigger>
            <p>{item.question}</p>
          </AccordionTrigger>

          <AccordionContent>
            <p key={index}>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
