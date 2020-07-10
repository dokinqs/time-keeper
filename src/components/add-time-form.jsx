import React, { useState } from 'react';
import firebase from '../firebase';

const AddTimeForm = () => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        firebase.firestore().collection('times')
        .add({
            title: title,
            time_sec: parseInt(time)
        })
        .then(() => {
            setTitle('')
            setTime('')
        })
        console.log('form submitted');
    }

    return (
        <form onSubmit={onSubmit}>
            <h4>Add Time Entry</h4>
            <div>
                <label>Title</label>{' '}
                <input type="text" placeholder="title text" maxLength="15"
                required
                value={title}
                onChange={e => setTitle(e.currentTarget.value)} />
            </div>
            <div>
                <label>Time</label>{' '}
                <input type="number" placeholder="time in seconds" 
                required
                value={time}
                onChange={e => setTime(e.currentTarget.value)} />
            </div>
            <button>Record Time</button>
        </form>
    )
}

export default AddTimeForm;