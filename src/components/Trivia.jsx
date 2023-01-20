import React, { useEffect, useState } from "react";

const Trivia = ({ data, setStop, setQuestionNumber, questionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassname] = useState("answer");
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const clickHandler = (item) => {
    setSelectedAnswer(item);
    setClassname("answer active");
    delay(2000, () =>
      setClassname(item.correct ? "answer correct" : "answer wrong")
    );
    delay(4000, () => {
      if (item.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    });
  };
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((item) => (
          <div
            className={item === selectedAnswer ? className : "answer"}
            onClick={() => clickHandler(item)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
