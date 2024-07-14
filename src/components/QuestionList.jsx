// frontend/src/components/QuestionList.jsx

import React, { useState, useEffect } from 'react';

const QuestionList = ({ selectedSurvey }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (selectedSurvey) {
      fetchQuestions();
    }
  }, [selectedSurvey]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/surveys/${selectedSurvey.id}/questions`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access_token}`,
        },
      });

      if (response.ok) {
        const questionData = await response.json();
        setQuestions(questionData);
      } else {
        console.error('Failed to fetch questions');
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div>
      <h2>Questions</h2>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.text}</p>
          {/* Display additional question details as needed */}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
