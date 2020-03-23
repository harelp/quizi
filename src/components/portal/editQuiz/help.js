const quizObj = {
  _id: '4km3',
  dateCreated: '03/05/2020',
  content: [
    {
      question: "What's the capital of Kenya?",
      answers: ['Nairobi', 'Bamako', 'Cairo', 'Africa'],
      correctAns: 'Nairobi'
    },
    {
      question: 'Where does Harel live',
      answers: ['India', 'Iran', 'Iraq', 'Israel'],
      correctAns: 'Israel'
    },
    {
      question: 'Why Helly Became Kelly',
      answers: [
        'she was supposed to be kelly',
        'because i said so',
        'we hate helly',
        'we love Putin'
      ],
      correctAns: 'we love Putin'
    }
  ],
  leaderBoard: [],
  name: 'Random Quiz',
  description: 'Yes we love random quizzes',
  userId: '5e6140dca3ad5626a4273460',
  __v: {
    $numberInt: '0'
  },
  private: false
};

export default quizObj;

//  useEffect(() => {
//    const filteredQuiz = userQuiz.filter(el => {
//      return el._id === props.location.state.id;
//    });

//    setQuiz(filteredQuiz);
//  }, []);

//  const quizData = quiz !== null;
//  quizData &&
//    quiz.map(el => {
//      console.log(el);
//    });
