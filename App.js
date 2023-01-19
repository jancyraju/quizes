// import logo from './logo.svg';
import './App.css';
import { useEffect, useState,useMemo} from "react";
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';
// import Rank from './components/Rank';

function App() {
  const[username, setUsername]= useState(null);
  const[questionNumber, setQuestionNumber]= useState(1);
  const[stop, setStop]= useState(false);
  const[earned, setEarned]= useState(" $ 0");

  const data = [
    {
      id: 1,
      question : "To kill someone for political reasons",
      answers: [
        {
          text: "Assassination",
          correct: true,
        },
        {
          text: "Genocide",
          correct: false,
        },{
          text: "Murder",
          correct: false,
        },{
          text: "Homicide",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question : "person who loves mankind",
      answers: [
        {
          text: "Philanthropist",
          correct: true,
        },
        {
          text: "Stringy",
          correct: false,
        },{
          text: "Egoist",
          correct: false,
        },{
          text: "Detractor",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question : "The founder of the Sikh religon was _ ",
      answers: [
        {
          text: "Tukaram",
          correct: false,
        },
        {
          text: "Ramanada",
          correct: false,
        },{
          text: "Guru Nanak",
          correct: true,
        },{
          text: "Kabir",
          correct: false,
        },
      ],
    },
    {
    id: 4,
    question : "Who is the creator of PASCAL Language? ",
    answers: [
      {
        text: "Aho",
        correct: false,
      },
      {
        text: " D. Khuth",
        correct: false,
      },{
        text: "Niklaus writh",
        correct: true,
      },{
        text: "Dijkstra",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question : "Pyrometer is used to measure ",
    answers: [
      {
        text: "Air pressure",
        correct: false,
      },
      {
        text: "High temperature",
        correct: true,
      },{
        text: " Intensity of earthquake",
        correct: false,
      },{
        text: " Humidity",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question : "Sodium metal is kept under",
    answers: [
      {
        text: " Alcohol",
        correct: false,
      },
      {
        text: "Water",
        correct: false,
      },{
        text: "Kerosene",
        correct: true,
      },{
        text: "Petrol",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question : "Which of the following pairs of metals are supposed to constitute the internal core of the earth? ",
    answers: [
      {
        text: "Nickel & Iron",
        correct: true,
      },
      {
        text: "Iron & Copper",
        correct: false,
      },{
        text: "Magnesium & Lead",
        correct: false,
      },{
        text: " Chromium& Iron",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question : "The plant used in the treatment of leprosy and T.B.",
    answers: [
      {
        text: "Kuppaimeni",
        correct: false,
      },
      {
        text: "Kizhanelli",
        correct: false,
      },{
        text: " Kandankathiri",
        correct: false,
      },{
        text: "Vallarai",
        correct: true,
      },
    ],
  },
  {
    id: 9,
    question : "In eye donation, which of the following parts of donor’s eye is utilized?",
    answers: [
      {
        text: "Retina",
        correct: false,
      },
      {
        text: "Lens",
        correct: false,
      },{
        text: "Iris",
        correct: false,
      },{
        text: "Cornea",
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question : "How is Bank-ki-Moon known as",
    answers: [
      {
        text: "Head of World Bank",
        correct: false,
      },
      {
        text: " President of South Korea",
        correct: false,
      },{
        text: "Secretary Generated of UN ",
        correct: true,
      },{
        text: "A famous scientist of Genetic Engineering",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question : "The 23 ½ North Latitude is _",
    answers: [
      {
        text: "The Arctic circle",
        correct: false,
      },
      {
        text: "The Equator",
        correct: false,
      },{
        text: "The Tropic of Cancer",
        correct: true,
      },{
        text: " The Tropic of Capricorn",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question : "The construction of the famous Qutbminar was completed by _",
    answers: [
      {
        text: "Qutb-ud-din-Aibak",
        correct: false,
      },
      {
        text: " Iltutmish",
        correct: true,
      },{
        text: "Muhammad Ghor",
        correct: true,
      },{
        text: " Razia",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question : "For playing which one of the games is Franck Ribery well known?",
    answers: [
      {
        text: " Badminton",
        correct: false,
      },
      {
        text: "Table Tennis",
        correct: false,
      },{
        text: "Chess",
        correct: false,
      },{
        text: "Football",
        correct: true,
      },
    ],
  },
  {
    id: 14,
    question : "Who is the author of the book ‘Mother India’?",
    answers: [
      {
        text: "Katherine Frank",
        correct: false,
      },
      {
        text: "Katherine Mayo",
        correct: true,
      },{
        text: "Sister Nivedita",
        correct: false,
      },{
        text: "Annie Besant",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question : "Who invented the mobile phones?",
    answers: [
      {
        text: "Koo In-hwoi",
        correct: false,
      },
      {
        text: "Liu Chuanzhi",
        correct: false,
      },{
        text: " Akio Morita",
        correct: false,
      },{
        text: "Martin Cooper",
        correct: true,
      },
    ],
  },

  ];
  const moneyPyramid = useMemo(() => 
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"},
    ] .reverse(),
  []
  );
    


useEffect(()=>{
   questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount)
},[moneyPyramid,questionNumber])
  return (
    <div className="App">
      {username ? (
        <>
           <div className="main">
        {stop ? 
        <h1 className='endText'> You earned : {earned}</h1> : (
      <>      
        <div className='top'>
          <div className='timer'>
            <Timer setStop={setStop} questionNumber={questionNumber}/>
            </div>
        </div>

        <div className='bottom'>
          <Trivia data={data} 
                  setStop={setStop} 
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}/>
          </div>
        </>
        )};
      </div>

      <div className="pyramid">
      <ul className="moneylist">

       {moneyPyramid.map(m=> (
        <li className={questionNumber === m.id ? "moneylistitem active" : "moneylistitem"} >
          <span className="moneylistitemnumber">{m.id}</span>
          <span className="moneylistitemamount">{m.amount}</span>
          </li> 

       ))}

        </ul>
      </div>
        </>
      ) :  (
      <Start setUsername={setUsername}/>
    )}


    {/* <Rank/> */}
      
      </div>
     
  );
}

export default App;
