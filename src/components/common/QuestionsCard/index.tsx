import { HeartIcon } from "@/assets/icons/LikeHeart";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { useState } from "react";

interface QuestionsAndAnswersArrayProps {
  question: string;
  answer: string;
}

interface QuestionsCardProps {
  technology: string;
  questionsResponse: Array<QuestionsAndAnswersArrayProps>;
}

export default function QuestionsCard({
  technology,
  questionsResponse,
}: QuestionsCardProps) {
  const [isLiked, setIsLiked] = useState<{ [key: number]: boolean }>({});
  const [showAnswer, setShowAnswer] = useState<{ [key: number]: boolean }>({});

  const toggleLike = (index: number) => {
    setIsLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleAnswer = (index: number) => {
    setShowAnswer((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="container w-full flex flex-wrap mt-10 gap-10">
      {questionsResponse.length > 0 &&
        questionsResponse.map((item, index) => (
          <Card key={index} className="max-w-[380px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <h3 className="text-large font-semibold">{technology}</h3>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                color="primary"
                radius="full"
                size="sm"
                variant="light"
                onPress={() => toggleLike(index)}
              >
                <HeartIcon
                  className={
                    isLiked[index]
                      ? "[&>path]:stroke-transparent h-4 w-4"
                      : "h-4 w-4"
                  }
                  fill={isLiked[index] ? "#ec0000" : "none"}
                />
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0">
              <p>{item.question}</p>
              <Button
                size="sm"
                variant="bordered"
                className="my-3"
                onClick={() => toggleAnswer(index)}
              >
                Reveal answer
              </Button>
            </CardBody>
            <CardFooter className="gap-3">
              {showAnswer[index] && (
                <div className="flex gap-1">
                  <p>{item.answer}</p>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
