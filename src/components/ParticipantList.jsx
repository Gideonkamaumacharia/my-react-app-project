// frontend/src/components/ParticipantList.jsx

import React, { useState, useEffect } from 'react';

const ParticipantList = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/participants', {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access_token}`,
        },
      });

      if (response.ok) {
        const participantData = await response.json();
        setParticipants(participantData);
      } else {
        console.error('Failed to fetch participants');
      }
    } catch (error) {
      console.error('Error fetching participants:', error);
    }
  };

  return (
    <div>
      <h2>Participants</h2>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id}>{participant.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantList;
