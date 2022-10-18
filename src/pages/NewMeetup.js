import React from 'react';
import {useNavigate} from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) { 
        fetch('https://meetups-eb6d8-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'content-Type': 'application/json' 
            }
        }
        ).then( () => {
            navigate('/');
        });
    }

    return <div> 
        <h1> New Meetup Page </h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>;
}

export default NewMeetup;