// src/App.jsx

import React from 'react';
//import Login from './components/Login';
import UserList from './components/UserList';
import SurveyList from './components/SurveyList';
import QuestionList from './components/QuestionList';
import ParticipantList from './components/ParticipantList';


const App = () => {
  return (
    <div>
      <h1>Survey App</h1>
      <UserList/>
      <QuestionList/>
      <SurveyList/>
      <ParticipantList/>
    </div>
  );
};

export default App;
