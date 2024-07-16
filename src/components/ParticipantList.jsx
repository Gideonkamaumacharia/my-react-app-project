import React, { useState, useEffect } from 'react';

function ParticipantList() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetchParticipants();
  }, []);

  function fetchParticipants() {
    fetch('http://127.0.0.1:5000/participants', {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access_token}`,
      },
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Failed to fetch participants');
        }
        return response.json();
      })
      .then(function(participantData) {
        setParticipants(participantData);
      })
      .catch(function(error) {
        console.error('Error fetching participants:', error);
      });
  }

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
}

export default ParticipantList;
