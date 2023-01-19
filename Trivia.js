import { useEffect, useState } from "react";
export default function Trivia(
    {data,setStop,questionNumber,setQuestionNumber,})
{

    const [question, setQuestion] = useState(null);
    const [selectAnswer, setSelectAnswer] = useState(null);
    const [className, setClassname] = useState("answer");

    useEffect(()=> { 
       setQuestion(data[questionNumber - 1 ])
    }, [data,questionNumber]);


    const delay = (duration, callback) => {
        setTimeout(()=> {
            callback();
        }, duration);
    };

   const handleClick = (a) => {
      setSelectAnswer(a);
      setClassname("answer active");
      delay(3000, () => 
          
      setClassname(a.correct ? "answer correct" : "answer wrong")
      );

      delay(6000, () => {
        if(a.correct)
        {
            delay(1000,()=> {
            setQuestionNumber(prev=> prev + 1);
            setSelectAnswer(null);
        });
        }
        else{
            delay(1000,()=> {
                setStop(true);
            });
        }
      });   
   };

    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a)=> (
                <div className={selectAnswer === a ? className: "answer"} onClick={() =>handleClick(a)}>{a.text}</div>
                ))}
            </div>

        </div>
      );
}