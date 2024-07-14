// frontend/src/components/SurveyList.jsx

import React, { useState, useEffect } from 'react';

const SurveyList = ({ loggedIn }) => {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  useEffect(() => {
    fetchSurveys();
  }, []);

  const fetchSurveys = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/surveys', {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access_token}`,
        },
      });

      if (response.ok) {
        const surveyData = await response.json();
        setSurveys(surveyData);
      } else {
        console.error('Failed to fetch surveys');
      }
    } catch (error) {
      console.error('Error fetching surveys:', error);
    }
  };

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
    </div>
  );
};

export default SurveyList;
