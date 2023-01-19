import React, { useEffect, useState } from "react";

const Trivia = ({ data, setTimeOut, setQuestionNumber, questionNumber }) => {
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((item) => (
          <div className="answer">
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
