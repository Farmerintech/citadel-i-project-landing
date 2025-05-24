"use client"

import { useUser } from "@/app/context/reducer"
import { ChangeEvent, useEffect, useState } from "react"
import { FaCalculator, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { FiClock } from "react-icons/fi"

export default function Page() {
  const [currentSubject, setCurrentSubject] = useState<string>('English Language');
  const [questionIndex, setQuestionIndex] = useState(1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [answeredQues, setAnswered] = useState<any[]>([])
  const { state } = useUser();

  const data = [
    {
      question: 'The true stomach of ruminants is called',
      options: {
        A: 'Omason',
        B: 'Abomason',
        C: 'Rumen',
        D: 'Reticulum'
      },
      answer: 'Abomason'
    },
    {
      question: 'Which part is responsible for water absorption?',
      options: {
        A: 'Small intestine',
        B: 'Rumen',
        C: 'Large intestine',
        D: 'Esophagus'
      },
      answer: 'Large intestine'
    }
  ];

  const Next = (index: number) => {
    if (index < data.length) {
      setQuestionIndex(index + 1);
    }
  };

  const Prev = (index: number) => {
    if (index > 1) {
      setQuestionIndex(index - 1);
    }
  };
 
  useEffect(()=>{

  }, [answeredQues])

  const handleOption = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    setAnswered(prev=>(
        [...prev, index]
    ))
    setAnswers(prev => ({
      ...prev,
      [index]: event.target.value
    }));
  };

//   alert(answeredQues)
  const calculateScore = () => {
    let score = 0;
    data.forEach((item, idx) => {
      if (answers[idx] === item.answer) {
        score += 1;
      }
    });
    alert(`Your score is ${score} out of ${data.length}`);
  };


//calculateScore()
  return (
    <section className="flex flex-col gap-[12px] justify-between bg-[#F3F3F3] xl:px-[100px] px-[16px] py-[24px]">
      <aside className="bg-white py-[16px] px-[8px] flex gap-[24px] flex-col justify-between w-full">
        <div className="flex justify-between w-full">
          <p>{currentSubject}</p>
          <div className="flex gap-[24px] items-center">
            <div className="p-[8px] bg-white border-1 border-[#E7E7E7] text-[#F1A500] rounded-[4px]">
              <FiClock />
            </div>
            <p className="text-[24px] font-600">00:00:33</p>
            <button
              onClick={calculateScore}
              className="bg-[#FF5900] text-white px-[24px] py-[12px] gap-[8px] rounded-[8px]"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex justify-between gap-[8px]">
            {state.subjects.map((subject: string, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentSubject(subject)}
                className={`${currentSubject === subject ? 'bg-[#0DAF64] text-white' : 'bg-[#F2F4F7]'} rounded-[4px] gap-[8px] p-[8px]`}
              >
                {subject}
              </button>
            ))}
          </div>
          <div className="p-[8px] bg-white border-1 border-[#E7E7E7] text-black rounded-[4px] flex justify-center items-center">
            <FaCalculator />
          </div>
        </div>
      </aside>

      <aside className="bg-white py-[16px] px-[8px] flex gap-[24px] flex-col justify-between w-full">
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className={`p-[16px] ${questionIndex === index + 1 ? 'block' : 'hidden'}`}
            >
              <p className="py-[8px] font-[600]">
                <span>{index + 1}. </span>{item.question}
              </p>
              <ul className="flex flex-col gap-[8px]">
                {Object.entries(item.options).map(([key, value]) => (
                  <li key={key} className="flex gap-[4px]">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={value}
                      checked={answers[index] === value}
                      onChange={(event) => handleOption(event, index)}
                    />
                    {key}. {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex gap-[32px]">
          <button
            onClick={() => Prev(questionIndex)}
            className="bg-[#FFEEE6] py-[8px] flex text-[#FF5900] items-center px-[16px] gap-[16px]"
          >
            <span><FaChevronLeft /></span>
            Previous
          </button>
          <button
            onClick={() => Next(questionIndex)}
            className="bg-[#FFEEE6] py-[8px] flex text-[#FF5900] items-center px-[16px] gap-[16px]"
          >
            <span><FaChevronRight /></span>
            Next
          </button>
        </div>

        <div className="flex gap-[8px]">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setQuestionIndex(index + 1)}
              className={`${index + 1 === questionIndex ? 'bg-[#F1A500] text-white' : answeredQues.includes(index+1) ? "bg-green-500 text-white" : 'bg-[#D0D5DD]' 
                } rounded-[4px] w-[24px] h-[24px] p-[4px] gap-[4px] flex justify-center items-center`}
            >
              {index + 1}
            </button>
          ))}
        </div>
         {
        questionIndex === data.length &&
        <div className="flex justify-center ">
         <button onClick={calculateScore} className="bg-orange-500 text-white rounded-[8px] py-[12px] px-[24px] gap-[8px] w-[120px]">Submit</button>
        </div>
     }
      </aside>
    
    </section>
  );
}
//: answeredQues.includes(index+1) ? "bg-green-500 text-white":