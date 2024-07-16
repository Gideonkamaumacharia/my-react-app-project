import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList';

function SurveyList({ loggedIn }) {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  useEffect(() => {
    fetchSurveys();
  }, []);

  function fetchSurveys() {
    fetch('http://127.0.0.1:5000/surveys', {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access_token}`,
      },
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Failed to fetch surveys');
        }
        return response.json();
      })
      .then(function(surveyData) {
        setSurveys(surveyData);
      })
      .catch(function(error) {
        console.error('Error fetching surveys:', error);
      });
  }

  const handleSurveySelect = (survey) => {
    setSelectedSurvey(survey);
    // Fetch questions related to selected survey
    // Implement fetching questions logic here
  };

  return (
    <div>
      <h2>Surveys</h2>
      {loggedIn ? (
        <ul>
          {surveys.map((survey) => (
            <li key={survey.id} onClick={() => handleSurveySelect(survey)}>
              {survey.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>Please log in to view surveys.</p>
      )}
      <QuestionList/>
    </div>
  );
}

export default SurveyList;
