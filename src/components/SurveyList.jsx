import React, { useEffect, useState } from 'react';
import Login from './Login';

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoggedIn(true);
      fetchSurveys(); 
    }
  }, []);

  const fetchSurveys = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/surveys', {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
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

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Surveys</h2>
          <ul>
            {surveys.map((survey) => (
              <li key={survey.id}>{survey.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
};

export default SurveyList;
